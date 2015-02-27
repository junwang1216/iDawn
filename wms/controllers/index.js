var express = require('express');

// home
var router_index = express.Router(),
    index_controller = require('./home');

router_index.get('/', index_controller.index);
router_index.post('/account/login', index_controller.login);

// main
var router_main = express.Router(),
    main_controller = require('./main');

router_main.get('/', main_controller.index);

// exports
exports.index = router_index;
exports.main = router_main;
