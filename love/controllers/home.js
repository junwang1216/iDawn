/** 
* @fileOverview 博客首页控制器
* @author junwang1216@gmail.com
* @version 1.0.0
*/

//引用model文件
var gallery = require("../models/gallery"),
    motto = require("../models/motto");

/** 
* @description 加载渲染博客首页
* @param {object} req 页面请求对象
* @param {object} res 页面相应对象
*/
exports.index = function(req, res) {
    "use strict";
    gallery.getLatestAlbums(function (list) {
        motto.getMotto(function (items) {
            res.render('home/index', {
                albums: list,
                motto: items,
                page: "home"
            });
        });
    });
};
