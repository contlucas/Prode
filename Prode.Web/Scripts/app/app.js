require(["angular"], function() {
    var app = angular.module("app", []);

    app.controller("AppController", function($scope) {
        $scope.nombre = "lucas";

    });
});
