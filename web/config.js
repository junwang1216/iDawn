var fs = require('fs'),
    path = require('path'),
    info = JSON.parse(fs.readFileSync('./package.json', "utf8"));

module.exports = {
    app: {
        version     : info.version,
        name        : info.name,
        title       : "IDAWN博客",
        host        : '127.0.0.1',
        port        : 8080,
        email       : "junwang1216@gmail.com",
        author      : "iDawn",
        keywords    : "wms, angularjs, javascript, bootstrap",
        description : "iDawn Blog Website Management System",
        cssjs       : ""
    }
};
