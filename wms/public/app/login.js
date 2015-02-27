(function ($) {
    function Login() {
        var _loginHref = "/account/login",
            _targetHref = "/main",
            _logInfo = {
                id: 1234567890,
                name: "iDawn",
                account: ""
            };

        function _login (account, password) {
            _logInfo.account = account;

            $.post(_loginHref, {
                account: account,
                password: password
            }, function (ret) {
                if (ret.status === 200) {
                    $.cookie('logInfo', JSON.stringify(_logInfo),
                        {path: "/", expires: 30, domain: "idawn.*.com"});
                    iDawn.apis.goHref(_targetHref);
                }
            })
            .fail(function () {
                iDawn.dialogs.alert("error");
            });
        };

        this.onLoad = function () {
            this.bindEvents();
        };

        this.bindEvents = function () {
            var $login = $("#btn-login");

            $login.on("click", function (e) {
                e.preventDefault();

                var $account = $("#txt-account"),
                    $password = $("#pwd-password");

                $account.parents(".form-group").removeClass("has-error");
                if (iDawn.apis.checkNull($account).status) {
                    $account.parents(".form-group").addClass("has-error");
                }
                $password.parents(".form-group").removeClass("has-error");
                if (iDawn.apis.checkNull($password).status) {
                    $password.parents(".form-group").addClass("has-error");
                }

                if ($account.parents("form").find(".has-error").size() > 0) {
                    return;
                }

                _login($account.val(), $password.val());
            });
        };
    }

    $(document).ready(function () {
        var log = $.cookie('logInfo');

        if (!!log) {
            iDawn.apis.goHref("/main");
        }
        else {
            log = new Login();
            log.onLoad();
        }
    });
})(jQuery);