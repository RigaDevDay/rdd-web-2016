export function SponsorsDirective () {
  'ngInject';

  return {
    restrict: 'E',
    templateUrl: 'app/components/sponsors/sponsors.html',
    scope: {},
    controller: SponsorsController,
    controllerAs: 'vm',
    bindToController: true
  };
}

class SponsorsController {
  constructor () {
    'ngInject';
  }
}
