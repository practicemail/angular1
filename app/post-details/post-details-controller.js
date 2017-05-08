(function () {
    "use strict";

    angular
        .module("app")
        .controller("PostDetailsController", PostDetailsController);

    PostDetailsController.$inject = ["PostService","AuthorService","PostDetailsService","$stateParams"];

    function PostDetailsController(PostService,AuthorService, PostDetailsService,$stateParams) {
        var vm = this;
        vm.postD = {};
        vm.postDetails = PostDetailsService.postItem.get({postId: $stateParams.postId});
        vm.postComment = PostDetailsService.postComments.query({postId: $stateParams.postId});
        vm.authors = AuthorService.getUsers();

        vm.postDetails.$promise.then(function(pData) {
            vm.postD = pData;

            vm.authors.$promise.then(function(aData) {
                vm.authorData = aData;

                for (var i = 0; i < vm.authorData.length; i++) {
                    if (vm.authorData[i].id === vm.postD.userId) {
                        vm.postD.author = vm.authorData[i].name;
                        vm.postD.authorId = vm.authorData[i].id;
                    }
                }

            })
        });

        vm.postComment.$promise.then(function(cData) {
            vm.postComments = cData;
        });
    }
})();