/** 
* @fileOverview 博客照片控制器
* @author junwang1216@gmail.com
* @version 1.0.0
*/

//引用model文件
var gallery = require("../models/gallery"),
    config = require("../config");

/** 
* @description 加载渲染博客照片页
* @param {object} req 页面请求对象
* @param {object} res 页面相应对象
*/
exports.index = function(req, res) {
    "use strict";
    gallery.getAlbums(function (list) {
        res.render('photo/index', {
            albums: list,
            page: "photo"
        });
    });
};

/** 
* @description 加载渲染博客相册照片根据相册
* @param {object} req 页面请求对象
* @param {object} res 页面相应对象
*/
exports.getPhotoByAlbum = function(req, res) {
    "use strict";
    var options = {
        album: req.params.album
    };

    gallery.getAlbumPhotos(options, function (items) {
        res.render('photo/gallery', {
            photos: items,
            page: "photo"
        });
    });
};
