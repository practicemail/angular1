(function () {
    "use strict";

    angular
        .module("app")
        .service("PostListService", PostListService);

    PostListService.$inject = ["$resource"];

    function PostListService($resource) {
        var service = this;

        service.data = $resource("http://jsonplaceholder.typicode.com/:org/:id",
            {
                id: "@id",
                org: "@org"
            },
            {
                getPostsData: {
                    method: "GET",
                    isArray: true,
                    params: {org: "posts"}
                },

                getUsersData: {
                    method: "GET",
                    isArray: true,
                    params: {org: "users"}
                }
            });

        return service.data;


        //var deferred = $q.defer();
        //
        //$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data) {
        //    deferred.resolve(data);
        //});
        //
        //service.getPosts = function() {
        //    return deferred.promise;
        //};
        //
        //
        //$http.get('http://jsonplaceholder.typicode.com/users').then(function(data) {
        //    deferred.resolve(data);
        //});
        //
        //service.getUsers = function() {
        //    return deferred.promise;
        //};




        //return {
        //    get: function() {
        //        return {"name":"Ivan","age":26};
        //    }
        //};

    }

})();