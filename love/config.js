var fs = require('fs'),
    path = require('path'),
    info = JSON.parse(fs.readFileSync('./package.json', "utf8"));

module.exports = {
    app: {
        version : info.version,
        name    : info.name,
        title   : "IDAWN博客",
        host    : '127.0.0.1',
        port    : 18080,
        email   : "junwang1216@gmail.com",
        author  : "IDawn"
    },
    motto: {
        index: path.join(__dirname, "db/motto.json")
    },
    blog: {
        index   : path.join(__dirname, "db/blog.json"),
        content : path.join(__dirname, "db/blogs/articles/")
    },
    photo: {
        index   : path.join(__dirname, "db/photo.json"),
        content : path.join(__dirname, "db/photos/"),
        contentType : {
            'jpg'   : 'image/jpeg',
            'jpeg'  : 'image/jpeg',
            'gif'   : 'image/gif',
            'png'   : 'image/png'
        }
    },
    image: {
        contentType : {
            'jpg'   : 'image/jpeg',
            'jpeg'  : 'image/jpeg',
            'gif'   : 'image/gif',
            'png'   : 'image/png'
        }
    },
    debug: {
        on      : true,
        path    : path.join(__dirname, "db/logs/"),
        prefix  : "log",
        level   : {
            "l0" : "INFORMATION",
            "l1" : "WARNNING",
            "l2" : "ERROR",
            "l3" : "DESTROY"
        },
        format  : "[TIME]-[LEVEL]-[FILE]: MESSAGE"
    }
};
