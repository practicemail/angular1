(function () {
    "use strict";

    angular
        .module("app")
        .service("AuthorService", AuthorService);

    AuthorService.$inject = ["$http","$q"];

    function AuthorService($http, $q) {
        var service = this;
        var deferred = $q.defer();

        $http.get('http://jsonplaceholder.typicode.com/users').then(function(data) {
            deferred.resolve(data);
        });

        service.getUsers = function() {
            return deferred.promise;
        };
    }

})();