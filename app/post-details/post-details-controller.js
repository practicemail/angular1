(function () {
    "use strict";

    angular
        .module("app")
        .controller("PostDetailsController", PostDetailsController);

    PostDetailsController.$inject = ["PostService","AuthorService","PostListService"];

    function PostDetailsController(PostService,AuthorService, PostListService) {
        var vm = this;
        vm.ab = ab;
        vm.postDetails = PostListService.postDetails;

        init();

        function init() {
            console.log(vm.postDetails);
        }

        function ab() {
            var b = AuthorService.getUsers();

            b.then(function(data) {
                vm.userData = data;

                for (var i = 0; i < vm.userData.data.length; i++) {
                    if (vm.userData.data[i].id === vm.postDetails.id) {
                        return vm.postDetails.author = vm.userData.data[i].name;
                    }
                }
            })
        }

        vm.ab();

    }
})();