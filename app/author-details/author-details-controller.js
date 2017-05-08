(function () {
    "use strict";

    angular
        .module("app")
        .controller("AuthorDetailsController", AuthorDetailsController);

    AuthorDetailsController.$inject = ["PostService","AuthorService","$stateParams"];

    function AuthorDetailsController(PostService,AuthorService,$stateParams) {
        var vm = this;
        vm.authorDetails = AuthorService.getUserItem({userId: $stateParams.userId});
        vm.authorData = {};
        vm.posts = PostService.getPosts();
        vm.PostsList = [];
        vm.authorPosts = [];

        vm.authorDetails.$promise.then(function(aData) {
            vm.authorData = aData;

            vm.posts.then(function(pData) {
                vm.postsList = pData.data;

                for (var i = 0; i < vm.postsList.length; i++) {
                    if (vm.postsList[i].userId === vm.authorData.id) {
                        vm.authorPosts.push(vm.postsList[i]);
                    }
                }
            });
        });
    }
})();