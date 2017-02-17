(function () {
    "use strict";

    angular
        .module("app")
        .service("PostListService", PostListService);

    PostListService.$inject = ["$http", "$q","$resource"];

    function PostListService($http, $q, $resource) {
        var service = this;
        service.loadPostDetails = loadPostDetails;

        service.postItem =  $resource("http://jsonplaceholder.typicode.com/posts/:id", {id: "@id"},
            {
                getPostItem: {
                    method: "GET"
                }
            }
        );

        function loadPostDetails(term) {
            service.postDetails = null;
            return service.postDetails = service.postItem.getPostItem({id: term});
        }
    }

})();
