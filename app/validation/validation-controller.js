(function () {
   "use strict";

    angular
        .module("app")
        .controller("ValidationController", ValidationController);

    ValidationController.$inject = ["RegistrationService"];

    function ValidationController(RegistrationService) {
        var vm = this;
        vm.reset = reset;
        vm.model = {};
        vm.submit = submit;

        init();

        function init() {

        }

        vm.reset();

        function reset() {
            vm.model = {};
        }

        function submit() {
            //if you want to test the submitted form use this line of the code below
            //alert('Submitted\n' + JSON.stringify(vm.model));

            RegistrationService.submit(vm.model).$promise.then(function(response){
                alert("success");
            },
            function(response) {
                alert("error");
            });
        }


    }
})();
