(function () {
    "use strict";

    angular
        .module("app")
        .controller("PizzaController", PizzaController);

    PizzaController.$inject = ["$scope", "PizzaService"];

    function PizzaController($scope, PizzaService) {
        var vm = this;
        vm.title = PizzaService.title;
        vm.searchAvailableToppings = PizzaService.availableToppings;
        vm.addTopping = '';
        vm.toppings = [];
        vm.alertSuccess = false;
        vm.alertDanger = false;

        init();

        function init() {

        }

        vm.addTopping = function(topping) {
            vm.toppings.push(topping);
            vm.alertSuccess = true;
            vm.search = null;
        };

        vm.close = function() {
            vm.alertSuccess = false;
        };

    }
})();
