(function() {

  
    var app = angular.module('album', []);

    app.controller('albumController', function($scope){
        $scope.name = "test";
    });

    app.controller('albumController', ['$scope',
        function($scope){
            $scope.name = "test";
        }
    ]);

    
})();
