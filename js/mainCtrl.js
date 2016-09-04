angular.module('friendsList').controller('mainCtrl', ['$scope',function($scope){
  $scope.friends = ['John', 'Tim', 'Fred', 'Bob'];
  $scope.newFriend = ''
  $scope.addFriend = function() {
      if ($scope.newFriend) {
        $scope.friends.push($scope.newFriend);
        this.newFriend='';
      }
  }
}]);
