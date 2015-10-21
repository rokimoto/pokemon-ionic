(function() {

  angular
    .module('phonecatFilters', [])

    .filter('capitalize', function() {
      return function(input, scope) {
        if (input!=null)
        input = input.toLowerCase();
        return input.substring(0,1).toUpperCase()+input.substring(1);
      }
    })

    .filter('getId', function() {
      return function(input, scope) {
        if (input!=null)
        return input.substring(15, input.length-1);
      }
    });

})();

