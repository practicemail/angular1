(function () {
    "use strict";

    angular
        .module("app",["ui.router","ngResource"])
        .config(appModuleConfig)
        .run(appModuleRun);

    appModuleConfig.$inject = [
        "$urlRouterProvider",
        "$stateProvider"
    ];

    function appModuleConfig($urlRouterProvider,$stateProvider){
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("post-list", {
                url:"/",
                templateUrl: "app/post-list/post-list.html",
                controller: "PostListController",
                controllerAs: "vm"
            })

            .state("post-details", {
                url:"/post/:postId",
                templateUrl: "app/post-details/post-details.html",
                controller: "PostDetailsController",
                controllerAs: "vm"
            })

            .state("pizza", {
                url:"/pizza/",
                templateUrl: "app/pizza/pizza.html",
                controller: "PizzaController",
                controllerAs: "vm"
            })

            .state("promises-example", {
                url: "/promises-example/",
                templateUrl: "app/promises-example/promises-example.html",
                controller: "PromisesExampleController",
                controllerAs: "vm"
            })


    }

    function appModuleRun() {
        console.log("appModuleRun loaded");
    }
})();
