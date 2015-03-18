var hbs = require('express-hbs');

//导航
hbs.registerHelper('cur_nav_item', function(cur, item) {
    "use strict";
    if (arguments.length < 3) {
        throw new Error("hbs Helper 'cur_nav_item' needs 2 parameters");
    }

    return new hbs.SafeString(
        "<li " + (cur === item ? "class='current'" : "") + ">"
    );
});

//motto
hbs.registerHelper('motto_show', function(items) {
    "use strict";
    if (arguments.length < 2) {
        throw new Error("hbs Helper 'cur_nav_item' needs 1 parameters");
    }

    var str = '';
    for (var i = 0; i < items.length; i++) {
        str += '<p>' + items[i] + '</p>'
    }

    return new hbs.SafeString(str);
});
