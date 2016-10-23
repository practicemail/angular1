(function () {
    "use strict";

    angular
        .module("app")
        .controller("PostDetailsController", PostDetailsController);

    PostDetailsController.$inject = ["PostService","AuthorService","$stateParams"];

    function PostDetailsController(PostService,AuthorService,$stateParams) {
        var vm = this;
        vm.postId = PostService.postId;

        init();

        function init() {

        }

        //var post = PostService.getPosts();
        //
        //    post.then(function(data) {
        //       vm.post = data;
        //        console.log(vm.post);
        //    });



        //vm.ab = function() {
        //    var a = PostService.getPosts();
        //    var b = AuthorService.getUsers();
        //
        //    a.then(function(data) {
        //        vm.postData = data;
        //
        //        b.then(function(data) {
        //            vm.userData = data;
        //            var i;
        //            for (i = 0; i < vm.userData.data.length; i++) {
        //                var j;
        //                for (j = 0;j < vm.postData.data.length; j++) {
        //                    if(vm.userData.data[i].id == vm.postData.data[j].id) {
        //                        vm.postData.data[j].author = vm.userData.data[i].name;
        //                        console.log(vm.postData.data[j]);
        //                    }
        //                }
        //            }
        //        });
        //    });
        //};
        //vm.ab();


    }
})();