(function () {
    "use strict";

    angular
        .module("app")
        .service("PizzaService", PizzaService);

    PizzaService.$inject = [];

    function PizzaService() {
        var pizzaservice = this;
        pizzaservice.title = "Pizza Builder";

        pizzaservice.availableToppings = [
            'Cheese',
            'Pepperoni',
            'Bacon',
            'Pineapple',
            'Sausage',
            'Ham',
            'Chicken',
            'Mushrooms',
            'Onion',
            'Olives',
            'Green Peppers'
        ];

    }
})();
