/** 
* @fileOverview 博客博文控制器
* @author junwang1216@gmail.com
* @version 1.0.0
*/

var blog = require("../models/blog"),
    config = require("../config");

/** 
* @description 加载渲染博客博文页
* @param {object} req 页面请求对象
* @param {object} res 页面相应对象
*/
exports.index = function(req, res) {
    "use strict";
    var options = {
        blog: req.params.blog
    };

    blog.getBlog(options, function (list, current) {
        res.render('blog/index', {
            blogs   : list,
            current : current,
            page    : "blog"
        });
    });
};