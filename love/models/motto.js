var fs = require('fs'),
    path = require('path'),
    tools = require('./tools'),
    config = require("../config"),
    Family,
    _data = {
        isReady: false,
        motto: null
    };

function _init() {
    "use strict";
    var dbIndex = config.motto.index;

    fs.readFile(dbIndex, "utf8", function (err, data) {
        if (err) {
            throw err;
        }

        _data.motto = JSON.parse(data);
        _data.isReady = true;
    });
}

Motto = {
    getMotto: function (callback) {
        "use strict";
        if (!_data.isReady) {
            return;
        }

        callback(_data.motto[0]);
    }
};

_init();

module.exports = Motto;
