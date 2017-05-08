(function () {
    "use strict";

    angular
        .module("app")
        .service("SearchService", SearchService);

    function SearchService() {
        var service = this;
            service.search = "";

        service.update = function(result){
            service.search = result;
        };

        return service;
    }
})();