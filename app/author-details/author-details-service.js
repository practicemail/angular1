(function () {
    "use strict";

    angular
        .module("app")
        .service("AuthorService", AuthorService);

    AuthorService.$inject = ["$resource"];

    function AuthorService($resource) {
        var service = this;

        service.users =  $resource("http://jsonplaceholder.typicode.com/users/:userId",
            {
                userId: "@userId"
            },
            {
                getUsers: {
                    method: "GET",
                    isArray: true
                },

                getUserItem: {
                    method:"GET"
                }
            }
        );

        return service.users;


        //var deferred = $q.defer();

        //$http.get('http://jsonplaceholder.typicode.com/users').then(function(data) {
        //    deferred.resolve(data);
        //});
        //
        //service.getUsers = function() {
        //    return deferred.promise;
        //};
    }

})();