(function () {
    "use strict";

    angular
        .module("app")
        .service("RegistrationService", RegistrationService);

    RegistrationService.$inject = ["$resource"];

    function RegistrationService($resource) {
        var service = this;

        return service.registration = $resource("https://reqres.in/api/register",
            {},
            {
                submit: {
                    method: "POST"
                }
            }
        );
    }

})();
