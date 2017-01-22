(function () {
    "use strict";

    angular
        .module("app")
        .service("PromisesExampleService", PromisesExampleService);

    PromisesExampleService.$inject = ["$resource"];

    function PromisesExampleService($resource) {
        var promiseservice = this;

        return $resource("https://api.github.com/:action/:org/:id",
            {
                action: "@action",
                org: "@org",
                id: "@id"
            },
            {
                getAll: {
                    method: "GET",
                    isArray: true,
                    params: {action: "orgs", org:"angular", id: "repos"}
                },

                getDetail: {
                    method: "GET",
                    params: {action: "repos", org:"angular" }
                }
            });
    }
})();
