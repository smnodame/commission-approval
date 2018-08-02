(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$rootScope', '$scope', '$http'];
    function HomeController($rootScope, $scope, $http) {

        $scope.on_click_success = () => {
          if (
            $scope.marketing_firstname &&
            $scope.marketing_lastname &&
            $scope.marketing_id &&
            $scope.marketing_team &&

            $scope.customer_firstname &&
            $scope.customer_lastname &&
            $scope.customer_bank_id &&
            $scope.customer_id
          ) {
            if($scope.note_file) {
              const formData = new FormData()
              formData.append('filename', filename)
              formData.append('fileupload', file)

              fetch('/api/upload', {
                  method: 'POST',
                  body: formData
              })
              .then(response => response.json())
              .catch(error => console.error('Error:', error))
              .then(response => console.log('Success:', response))
            }
            $http.post(`/api/commission`, {
              marketing_firstname: $scope.marketing_firstname,
              marketing_lastname: $scope.marketing_lastname,
              marketing_id: $scope.marketing_id,
              marketing_team: $scope.marketing_team,

              customer_firstname: $scope.customer_firstname,
              customer_lastname: $scope.customer_lastname,
              customer_bank_id: $scope.customer_bank_id,
              customer_id: $scope.customer_id,

              percent_option_1: $scope.percent_option_1,
              percent_option_2: $scope.percent_option_2,
              percent_option_3: $scope.percent_option_3,
              percent_option_4: $scope.percent_option_4,

              note_text: $scope.note_text
            })
          }
        }
    }

})();
