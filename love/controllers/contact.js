/** 
* @fileOverview 博客关于控制器
* @author junwang1216@gmail.com
* @version 1.0.0
*/

/** 
* @description 加载渲染博客关于页
* @param {object} req 页面请求对象
* @param {object} res 页面相应对象
*/
exports.index = function(req, res) {
    "use strict";
    res.render('contact/index', {
        page    : "contact"
    });
};