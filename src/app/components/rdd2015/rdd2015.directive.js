export function Rdd2015Directive () {
  'ngInject';

  return {
    restrict: 'E',
    templateUrl: 'app/components/rdd2015/rdd2015.html',
    scope: {},
    controller: Rdd2015Controller,
    controllerAs: 'vm',
    bindToController: true
  };
}

class Rdd2015Controller {
  constructor () {
    'ngInject';
  }
}
