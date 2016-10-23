(function () {
    "use strict";

    angular
        .module("app")
        .service("PostListService", PostListService);

    PostListService.$inject = ["$http","$q"];

    function PostListService($http, $q) {
        var service = this;
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