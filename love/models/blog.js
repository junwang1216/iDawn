var fs = require('fs'),
    path = require('path'),
    tools = require('./tools'),
    config = require("../config"),
    Family,
    _data = {
        isReady: false,
        blogs: [],
        articles: {},
        newest: ""
    };

function _init() {
    "use strict";
    var dbIndex = config.blog.index,
        dbPath = config.blog.content;

    fs.readFile(dbIndex, "utf8", function (err, data) {
        var scope = JSON.parse(data), name, blog = null, blogPath, i = 0;

        if (err) {
            throw err;
        }

         _data.blogs.length = 0;
        for (name in scope) {
            blog = tools.deepCopy(scope[name]);
            blog.id = name;
            if (i === 0) {
                _data.newest = name;
            }

            if (!_data.articles[blog.class]) {
                _data.articles[blog.class] = [];
            }
            _data.articles[blog.class].push(blog);

            _data.blogs.push(blog);
            blog = null;
            i++;

            blogPath = path.join(dbPath, name);
            (function (name, blogPath) {
                fs.readFile(blogPath, "utf8", function (err2, data2) {
                    if (err2) {
                        throw err2;
                    }

                    _data[name] = data2;
                });
            })(name, blogPath);
        }
        _data.isReady = true;
    });
}

Family = {
    getLatest: function (callback) {
        "use strict";
        if (!_data.isReady) {
            return;
        }

        callback(_data.blogs.slice(0, 1), content);
    },
    getList: function (callback) {
        "use strict";
        if (!_data.isReady) {
            return;
        }

        callback(_data.blogs);
    },
    getBlog: function (opts, callback) {
        "use strict";
        var current = {};

        if (!_data.isReady) {
            return;
        }

        if (!opts.blog) {
            current.id = _data.newest;
        }
        else {
            current.id = opts.blog;
        }
        current.content = _data[current.id];

        callback(_data.blogs, current);
    }
};

_init();

module.exports = Family;
