var express = require('express');

// home
var router_index = express.Router(),
    index_controller = require('./home');

router_index.get('/', index_controller.index);

// blog
var router_blog = express.Router(),
    blog_controller = require('./blog');

router_blog.get('/', blog_controller.index);

// exports
exports.index = router_index;
exports.blog = router_blog;
