(function () {
    "use strict";

    angular
        .module("app")
        .service("PostService", PostService);

    PostService.$inject = ["$http","$q" ];

    function PostService($http, $q) {
        var service = this;
        var deferred = $q.defer();

        $http.get('http://jsonplaceholder.typicode.com/posts').then(function(data) {
            deferred.resolve(data);
        });

        service.getPosts = function() {
            return deferred.promise;
        };
    }
})();