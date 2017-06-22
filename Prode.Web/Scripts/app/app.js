require(["angular"], function () {
    var app = angular.module("app", []);

    app.controller("AppController", function ($scope) {
        $scope.nombre = "lucas";
        //se hizo un cambio en este archivo
    });
});
