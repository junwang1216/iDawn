var bkmApp = null;
var controller = {};

var iDawn = {
  apis: {},
  dialogs: {},
  cookie: {}
};

iDawn.apis.goHref = function (href) {
    window.location.href = href;
}

iDawn.apis.checkNull = function ($el) {
    var val = $.trim($el.val());

    if (val === "") {
        return {
            status: true,
            message: "值是空"
        };
    }
    else {
        return {
            status: false,
            message: "值不是空"
        };
    }
}

iDawn.dialogs.alert = function (msg) {
    alert(msg);
};
