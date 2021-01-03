const app = angular.module("myApp", []);
app.controller('myCtrl', function ($scope) {
    $scope.arrItem = JSON.parse(localStorage.getItem('itemArr')) ? JSON.parse(localStorage.getItem('itemArr')) : [];
    $scope.submitNewData = () => {
        localStorage.setItem('itemArr', JSON.stringify($scope.arrItem));
    }
    $scope.submitItem = () => {
        if ($scope.item) {
            $scope.arrItem.push({
                id: $scope.arrItem.length + 1,
                name: $scope.item,
                status: false
            });
            $scope.item = '';
            $scope.submitNewData();
        }
    }
    $scope.deleteItem = (id) => {
        const item = $scope.arrItem.find(i => {
            return i.id === id;
        });
        $scope.arrItem.splice($scope.arrItem.indexOf(item), 1);
        $scope.submitNewData();
    }
})