(function (controller) {

    controller.news = function ($scope) {
        $scope.message = '我是新闻！！';

        CKEDITOR.replace('editor1');
    }

    controller.newsList = function ($scope) {
        $scope.newsList = [{
            id: "1",
            title: "企业新闻1",
            author: "林暗惊草",
            updateDate: "2015-02-16 12:12:00",
            brief: "其中包括W3C的标准技术：HTML、CSS、XML 。以及其他的技术，诸如JavaScript、PHP、SQL等等。"
        }, {
            id: "2",
            title: "企业新闻2",
            author: "林暗惊草",
            updateDate: "2015-02-16 12:12:00",
            brief: "其中包括W3C的标准技术：HTML、CSS、XML 。以及其他的技术，诸如JavaScript、PHP、SQL等等。"
        }, {
            id: "3",
            title: "企业新闻3",
            author: "林暗惊草",
            updateDate: "2015-02-16 12:12:00",
            brief: "其中包括W3C的标准技术：HTML、CSS、XML 。以及其他的技术，诸如JavaScript、PHP、SQL等等。"
        }, {
            id: "4",
            title: "企业新闻4",
            author: "林暗惊草",
            updateDate: "2015-02-16 12:12:00",
            brief: "其中包括W3C的标准技术：HTML、CSS、XML 。以及其他的技术，诸如JavaScript、PHP、SQL等等。"
        }, {
            id: "4",
            title: "企业新闻5",
            author: "林暗惊草",
            updateDate: "2015-02-16 12:12:00",
            brief: "其中包括W3C的标准技术：HTML、CSS、XML 。以及其他的技术，诸如JavaScript、PHP、SQL等等。"
        }];

        $scope.view = function (element) {
            window.location.href = "#news-detail";
        }

        $scope.delete = function (element) {
            var id = element.getAttribute("info"),
                i = 0,
                item = null;

            for (; i < $scope.newsList.length; i++) {
                item = $scope.newsList[i];

                if (item.id === id) {
                    $scope.newsList.splice(i, 1);
                    break;
                }
            }
        }
    }

    controller.newsDetail = function ($scope) {
        $scope.news = {
            id: "1",
            title: "企业新闻1",
            author: "林暗惊草",
            updateDate: "2015-02-16 12:12:00"
        };

        $scope.edit = function (element) {
            window.location.href = "#news-edit";
        }
    }

    controller.newsEdit = function ($scope) {
        CKEDITOR.replace('editor1');

        $scope.confirm = function (element) {
            window.location.href = "#news-detail";
        }

        $scope.cancel = function (element) {
            window.location.href = "#news-detail";
        }
    }

})(controller);
