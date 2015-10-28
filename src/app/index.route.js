export function routerConfig ($routeProvider) {
  'ngInject';

  $routeProvider
    .when('/index', {
      templateUrl: 'app/pages/index/index.html',
      controller: 'IndexController',
      controllerAs: 'index'
    })
    .otherwise({
      redirectTo: '/index'
    });
}
