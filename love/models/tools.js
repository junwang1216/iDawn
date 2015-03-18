var fs = require('fs'),
    path = require('path'),
    config = require("../config");

function _formatImagePath(rootPath, fileName) {
    "use strict";
    return fileName ? path.join(rootPath, fileName) : rootPath;
}

exports.getImagePath = function (opts, callback) {
    "use strict";
    var contentType = config.family.contentType,
        fileName = opts.photo,
        fileFolder = opts.album,
        rootPath = opts.root,
        ext = path.extname(fileName).substr(1),
        filePath;

    if (!contentType[ext]) {
        callback(_formatImagePath(rootPath));
    }

    filePath = _formatImagePath(rootPath, path.join(fileFolder, fileName));
    fs.exists(filePath, function (exists) {
        if (exists) {
            callback(filePath);
        }
        else {
            callback(_formatImagePath(rootPath));
        }
    });
};

exports.deepCopy = function (source, tg) {
    "use strict";
    var target = tg || {};
    for (var i in source) {
        if (typeof source[i] === 'object') {
            target[i] = (source[i].constructor === Array) ? [] : {};
            deepCopy(source[i], target[i]);
        } else {
            target[i] = source[i];
        }
    }
    return target;
};

exports.formatDate = function (format) {
    "use strict";
    var date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth(),
        day = date.getDate(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds();

    return format.replace(/YY|yy/, year)
            .replace(/MM|mm/, month >=9 ? (month + 1) : "0" + (month +1))
            .replace(/DD|dd/, day >= 10 ? day : "0" + day)
            .replace(/HH|hh/, hour >= 10 ? hour : "0" + hour)
            .replace(/FF|ff/, minute >= 10 ? minute : "0" + minute)
            .replace(/SS|ss/, second >= 10 ? second : "0" + second);
};

