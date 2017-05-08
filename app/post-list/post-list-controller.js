(function () {
    "use strict";

    angular
        .module("app")
        .controller("PostListController", PostListController);

    PostListController.$inject = ["$scope", "PostService", "AuthorService", "SearchService"];

    function PostListController($scope, PostService, AuthorService, SearchService) {
        var vm = this;
        var scope = $scope;
        vm.currentDate = new Date();
        vm.int = 32243;
        vm.intString = null;

        scope.searchData = "";

        scope.$watch(function() {
            return SearchService.search
        }, function(newVal) {
            if (newVal && typeof newVal !== "undefined") {
                scope.searchData = SearchService.search;
            } else if (newVal === false) {
                scope.searchData = false;
            }
        });

        vm.reverseInt = function() {
            vm.intString = vm.int.toString().split("").reverse().join("");
            vm.inverseNumber = Number(vm.intString);
        };

        vm.reverseInt();

        vm.printCurrentPage = function() {
            window.print();
        };

        vm.ab = function() {
            var a = PostService.getPosts();
            var b = AuthorService.getUsers();

            a.then(function(data) {
                vm.postData = data;

                b.$promise.then(function(users) {
                    vm.usersData = users;

                    var i;
                    for (i = 0; i < vm.usersData.length; i++) {
                        for (var j = 0; j < vm.postData.data.length; j++) {
                            if(vm.usersData[i].id === vm.postData.data[j].userId) {
                                vm.postData.data[j].author = vm.usersData[i].name;
                                vm.postData.data[j].authorId = vm.usersData[i].id;
                            }
                        }
                    }
                })
            })
        };

        vm.ab();
    }
})();
