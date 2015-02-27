(function (controller) {

    controller.report = function ($scope) {
        $scope.message = 'Look! I am an report page.';
        $scope["line_labels"] = ["January", "February", "March", "April", "May", "June", "July"];
        $scope["line_series"] = ['Series A', 'Series B'];
        $scope["line_data"] = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        $scope.onLineClick = function (points, evt) {
            console.log(points, evt);
        };

        $scope["bar_labels"] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        $scope["bar_series"] = ['Series A', 'Series B'];
        $scope["bar_data"] = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];


        $scope["doughnut_labels"] = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
        $scope["doughnut_data"] = [300, 500, 100];

        $scope["radar_labels"] =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];
        $scope["radar_data"] = [
            [65, 59, 90, 81, 56, 55, 40],
            [28, 48, 40, 19, 96, 27, 100]
        ];

        $scope["pie_labels"] = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
        $scope["pie_data"] = [300, 500, 100];

        $scope.polar_labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
        $scope.polar_data = [300, 500, 100, 40, 120];


        $scope.toggle_labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
        $scope.toggle_data = [300, 500, 100, 40, 120];
        $scope.toggle_type = 'PolarArea';
        $scope.onToggleClick = function () {
            $scope.toggle_type = ($scope.toggle_type === 'PolarArea') ? 'Pie' : 'PolarArea';
        };
    }

})(controller);
