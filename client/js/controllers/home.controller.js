myApp.controller('home-controller', function($scope, artboardFactory){

    artboardFactory.getArtboards(function(callback){
        $scope.artboards = callback;
    });

});
