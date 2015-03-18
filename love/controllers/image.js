/** 
* @fileOverview 博客图片显示控制器
* @author junwang1216@gmail.com
* @version 1.0.0
*/

//引用model文件
var gallery = require("../models/gallery"),
    config = require("../config");

/** 
* @description 加载渲染博客照片图片
* @param {object} req 页面请求对象
* @param {object} res 页面相应对象
*/
exports.showPhoto = function (req, res) {
    "use strict";
    var options = {
        root: config.family.gallery.content,
        album: req.params.album,
        photo: req.params.photo
    };

    gallery.sendPhoto(options, function (filePath) {
        res.sendFile(filePath);
    });
};
