/*
 * Login Page.
 */
exports.index = function(req, res) {
    "use strict";
    res.render('login/login', {});
};

exports.login = function(req, res) {
    "use strict";
    console.log(req.body);

    res.json({"status": 200});
};
