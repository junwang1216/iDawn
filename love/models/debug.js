var fs = require("fs"),
    path = require("path"),
    tools = require("./tools"),
    config = require("../config"),
    _data = {};

function _init () {
    "use strict";
    var debug = config.debug;

    _data.rootPath  = debug.path;
    _data.logPrefix = debug.prefix;
    _data.formatMsg = debug.format;
    _data.logLevel  = debug.level;
    _data.isDebug   = debug.on;
}

_init();

exports.writeLogs = function (level, message) {
    "use strict";
    if (!_data.isDebug) {
        return;
    }

    var suffix = tools.formatDate("YYMMDD"),
        fileName = _data.logPrefix + suffix,
        filePath = path.join(_data.rootPath, fileName),
        info;

    info = _data.formatMsg.replace("TIME", tools.formatDate("hh:ff:ss"))
        .replace("LEVEL", _data.logLevel[level] ? _data.logLevel[level] : "UNDEFINED")
        .replace("FILE", filePath ? __dirname : filePath)
        .replace("MESSAGE", message) + "\n";

    fs.appendFile(filePath, info, function (err) {
        if (err) {
            console.log("Cannot write debug information.");
        }
    });
};
