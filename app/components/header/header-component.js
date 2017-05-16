(function () {
    "use strict";

    angular
        .module("app")
        .component("appHeader", {
            templateUrl: "app/components/header/header.html",
            controller: ["$rootScope", headerController],
            controllerAs: "header"
        });

    function headerController($rootScope) {
        var header = this;

        $rootScope.searchData = "";
        $rootScope.$watch("searchData")}
})();