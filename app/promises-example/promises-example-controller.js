(function () {
    "use strict";

    angular
        .module("app")
        .controller("PromisesExampleController", PromisesExampleController);

    PromisesExampleController.$inject = ["$q", "$timeout", "PromisesExampleService", "$http"];

    function PromisesExampleController($q, $timeout, PromisesExampleService, $http) {
        var vm = this;
        //vm.model = PromisesExampleService.model;
        vm.checkOddNumber = checkOddNumber;
        vm.checkOddNumberHandler = checkOddNumberHandler;
        vm.isNumberOdd = isNumberOdd;
        vm.getRepos = getRepos;
        vm.loadDetail = loadDetail;

        vm.model = {
            number: 0,
            result: "Ready!"
        };

        init();

        function init() {

        }

        function checkOddNumber (input) {
            vm.model.result = "Working...";

            vm.checkOddNumberHandler(input).then(function (result) {
                vm.model.result = "Success: " + result;

            }, function(result) {
                vm.model.result = "Error: " + result;
            })
        }

        function checkOddNumberHandler(input) {
            var defer = $q.defer();

            $timeout(function() {
                if (vm.model.number === 0) {
                    vm.model.result = "Ready";
                }
                else if (vm.isNumberOdd(input)) {
                    defer.resolve("Yes, an odd number");
                } else {
                    defer.reject("Not an odd number");
                }
            }, 1000);

            return defer.promise;
        }

        function isNumberOdd(input) {
            return !isNaN(input) && input % 2 == 1;
        }

        //Data from the server
        function getRepos() {
            //$http service

            //$http.get("https://api.github.com/orgs/angular/repos")
            //    .then(function(response) {
            //        vm.repos = response.data;
            //        console.log(vm.repos);
            //    }, function (response) {
            //        vm.repos = "Error: " + response.data.message;
            //    });


            //$resource service (we included data from PromisesExampleService service)
            vm.repos = PromisesExampleService.getAll();

        }

        function loadDetail(name) {
            //$http service

            //var url = "https://api.github.com/repos/angular/" + name;
            //
            //$http.get(url)
            //    .then(function (response) {
            //        vm.detail = response.data;
            //    }, function (response) {
            //        vm.detail = {error: true, message: "Error: " + response.data.message};
            //    });


            //$resource service (we included data from PromisesExampleService service)
            vm.detail = null;
            vm.detail = PromisesExampleService.getDetail({ id: name });
        }
    }
})();
