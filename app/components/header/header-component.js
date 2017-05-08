(function () {
    "use strict";

    angular
        .module("app")
        .component("appHeader", {
            templateUrl: "app/components/header/header.html",
            controller: ["SearchService", "$scope", headerController],
            controllerAs: "header"
        });

    function headerController(SearchService, $scope) {
        var header = this;
        var scope = $scope;

        scope.searchData = SearchService.search;

        scope.$watch('searchData', function(newValue) {
            if (newValue.length > 0) {
                SearchService.update(newValue);
            } else {
                SearchService.update(false);
            }
        });
    }
})();