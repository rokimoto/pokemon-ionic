(function() {

  angular
    .module('pokemon_app')
    .controller('ApplicationController', ApplicationController);

    ApplicationController.$inject = ['$http', '$stateParams'];

    function ApplicationController($http, $stateParams) {
      var self = this;

      var promise = $http.get('http://pokeapi.co/api/v1/pokedex/1').success(function(data, status, headers, config){
        return data;
      });

      promise.then(function(response){
        self.pokemon = response.data.pokemon;
      });

      if ($stateParams.pokeId){
        console.log("hi")
        var details = $http.get('http://pokeapi.co/api/v1/pokemon/' + $stateParams.pokeId).success(function(data, status, headers, config){
          return data;
        });

        details.then(function(response){
          self.detail = response.data;
          console.log(self.detail)

          var imagecall = "http://pokeapi.co" + self.detail.sprites[0].resource_uri;
          $http.get(imagecall)
            .success(function(data) {
              var pic = data.image;
              self.pokepic = "http://pokeapi.co" + data.image;
          });

          var descriptioncall = "http://pokeapi.co" + self.detail.descriptions[0].resource_uri;
          $http.get(descriptioncall)
            .success(function(data) {
              console.log(data.description)
              self.description = data.description;
          });
          

        });


      }

    }

})();