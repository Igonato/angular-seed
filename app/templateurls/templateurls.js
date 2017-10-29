'use strict';

angular.module('myApp.templateurls', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/templateurls', {
    templateUrl: 'templateurls/templateurls.html',
    controller: 'TemplateUrlsCtrl'
  });

  $routeProvider.when('/templateurls/cache', {
    templateUrl: 'cache/templateurls.html',
    controller: 'TemplateUrlsCtrl'
  });
}])

.run(function($templateCache) {
  $templateCache.put(
    'cache/templateurls.html',
    '<p>This is the partial for templateurls from $templateCache</p>'
  );
})

.controller('TemplateUrlsCtrl', [function() {

}]);
