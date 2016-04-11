var App = angular.module("App",["ionic"]);

App.controller("AppCtrl",["$scope","$log","$http",AppCtrl]);

function AppCtrl($scope,$log,$http){
    
    $scope.userinput = ' ';
  
    function getatt(){
       
    $http.get('http://attrack.in/api/'+$scope.userinput)
        
        .success(function(data) {
                                    $scope.attdata=[];
                                    window.localStorage['data'] = JSON.stringify(data);
                                    var data = JSON.parse(window.localStorage['data'] || '{}');
                                    $scope.attdata=data;
                                    $scope.$broadcast("scroll.refreshComplete");
                                });}
    
    
    
    $scope.refresh = function(){
    getatt();}
    
    $scope.getatt = function(){
    getatt();
  
   
    
    }
    
}

