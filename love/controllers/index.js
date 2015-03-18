var express = require('express');

//首页路由
var router_home = express.Router(),
    home_controller = require('./home');

router_home.get('/', home_controller.index);

//照片路由
var router_photo = express.Router(),
    photo_controller = require('./photo');

router_photo.get('/', photo_controller.index);
router_photo.get('/:album?', photo_controller.getPhotoByAlbum);

//博文路由
var router_blog = express.Router(),
    blog_controller = require('./blog');

router_blog.get('/:blog?', blog_controller.index);

//图片路由
var router_image = express.Router(),
    image_controller = require('./image');

router_image.get('/:album?/:photo?', image_controller.showPhoto);

//对外接口
exports.home = router_home;
exports.photo = router_photo;
exports.blog = router_blog;
exports.image = router_image;
