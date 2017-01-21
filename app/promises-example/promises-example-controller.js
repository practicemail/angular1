(function () {
    "use strict";

    angular
        .module("app")
        .controller("PromisesExampleController", PromisesExampleController);

    PromisesExampleController.$inject = ["$q", "$timeout", "PromisesExampleService"];

    function PromisesExampleController($q, $timeout, PromisesExampleService) {
        var vm = this;
        vm.model = PromisesExampleService.model;
        //vm.checkOddNumber = checkOddNumber;
        //vm.checkOddNumberHandler = checkOddNumberHandler;
        //vm.isNumberOdd = isNumberOdd;

        init();

        function init() {

        }

        vm.checkOddNumber = function(input) {
            vm.model.result = "Working...";

            vm.checkOddNumberHandler(input).then(function (result) {
                vm.model.result = "Success: " + result;

            }, function(result) {
                vm.model.result = "Error: " + result;
            })
        };

        vm.checkOddNumberHandler = function(input) {
            var defer = $q.defer();

            $timeout(function() {
                if(vm.isNumberOdd(input)) {
                    defer.resolve("Yes, an odd number");
                } else {
                    defer.reject("Not an odd number");
                }
            }, 1000);

            return defer.promise;
        };

        vm.isNumberOdd = function(input) {
            return !isNaN(input) && input % 2 == 1;
        };




    }
})();
