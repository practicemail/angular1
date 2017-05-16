(function () {
    "use strict";

    angular
        .module("app")
        .controller("PostListController", PostListController);

    PostListController.$inject = ["$state", "$scope", "PostService", "AuthorService", "$stateParams"];

    function PostListController($state, $scope, PostService, AuthorService, $stateParams) {
        var vm = this;
        var scope = $scope;
        vm.currentDate = new Date();
        vm.int = 32243;
        vm.intString = null;

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

        vm.reverseInt = function() {
            vm.intString = vm.int.toString().split("").reverse().join("");
            vm.inverseNumber = Number(vm.intString);
        };

        vm.reverseInt();

        vm.printCurrentPage = function() {
            window.print();
        };

        //window.onbeforeunload = function(event) {
        //    if ($state.current.controller === 'PostListController') {
        // Ask the user if he wants to reload
        //return 'Are you sure you want to reload?'
        //}

        //else {
        // Allow reload without any alert
        //event.preventDefault()
        //}
        //};
    }
})();
