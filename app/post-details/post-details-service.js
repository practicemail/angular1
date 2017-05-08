(function () {
    "use strict";

    angular
        .module("app")
        .service("PostDetailsService", PostDetailsService);

    PostDetailsService.$inject = ["$resource","$stateParams"];

    function PostDetailsService($resource, $stateParams) {
        var service = this;

        service.postsUrl = "http://jsonplaceholder.typicode.com/posts/:postId";

        service.postItem =  $resource(service.postsUrl, {postId: "@id"});

        service.postComments = $resource(service.postsUrl + "/comments", {postId: "@id"});
    }

})();
