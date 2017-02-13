(function () {
    "use strict";

    angular
        .module("app")
        .controller("PostListController", PostListController);

    PostListController.$inject = ["PostService", "PostListService", "AuthorService"];

    function PostListController(PostService, PostListService, AuthorService) {
        var vm = this;
        vm.currentDate = new Date();
        vm.int = 32243;
        vm.intString = null;

        vm.reverseInt = function() {
            vm.intString = vm.int.toString().split("").reverse().join("");
            vm.inverseNumber = Number(vm.intString);
            console.log(vm.inverseNumber);

        };

        vm.reverseInt();

        vm.printCurrentPage = function() {
            window.print();
        };

        init();

        function init() {
        }


        vm.ab = function() {
            var a = PostService.getPosts();
            var b = AuthorService.getUsers();

            a.then(function(data) {
                vm.postData = data;

                b.then(function(data) {
                    vm.userData = data;
                    var i;
                    for (i = 0; i < vm.userData.data.length; i++) {
                        var j;
                            if(vm.userData.data[i].id == vm.postData.data[j].id) {
                                vm.postData.data[j].author = vm.userData.data[i].name;
                            }
                        }
                    }
                });
            });
        };

        vm.ab();
    }
})();
