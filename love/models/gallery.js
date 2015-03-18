var fs = require('fs'),
    path = require('path'),
    tools = require('./tools'),
    debug = require("./debug"),
    config = require("../config"),
    Gallery,
    _data = {
        isReady: false,
        albums: []
    };

function _init () {
    "use strict";
    var dbIndex = config.photo.index,
        dbPath = config.photo.content;

    fs.readFile(dbIndex, "utf8", function (err, data) {
        var scope = JSON.parse(data),
            name, albumPath, album = null;

        if (err) {
            debug.writeLogs("l2", "Fail to read gallery index file.", __dirname);
            throw err;
        }

        _data.albums.length = 0;
        for (name in scope) {
            album = tools.deepCopy(scope[name]);
            album.id = name;

            _data.albums.push(album);
            album = null;

            albumPath = path.join(dbPath, name);
            (function (name, albumPath) {
                fs.readdir(albumPath, function (err, files) {
                    var i;

                    if (err) {
                        throw err;
                    }

                    _data[name] = [];
                    for (i = 0; i < files.length; i++) {
                        _data[name].push({
                            index: i,
                            album: name,
                            photo: files[i],
                            prev: (i === 0) ? files[files.length - 1] : files[i - 1],
                            next: (i === files.length - 1) ? files[0] : files[i + 1]
                        });
                    }
                });
            })(name, albumPath);
        }

        _data.isReady = true;
    });
}

Gallery = {
    getLatestAlbums: function (callback) {
        "use strict";
        if (!_data.isReady) {
            return;
        }

        callback(_data.albums.slice(0, 12));
    },
    getAlbums: function (callback) {
        "use strict";
        if (!_data.isReady) {
            return;
        }

        callback(_data.albums);
    },
    getAlbumPhotos: function (opts, callback) {
        "use strict";
        if (!_data.isReady) {
            return;
        }

        callback(_data[opts.album]);
    },
    sendPhoto: function (opts, callback) {
        "use strict";
        tools.getImagePath(opts, callback);
    },
    reload: function() {
        "use strict";
        data.isReady = false;
        _init();
    }
};

_init();

module.exports = Gallery;
