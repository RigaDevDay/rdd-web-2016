export function TicketsDirective () {
  'ngInject';

  return {
    restrict: 'E',
    templateUrl: 'app/components/tickets/tickets.html',
    scope: {},
    controller: TicketsController,
    controllerAs: 'vm',
    bindToController: true
  };
}

class TicketsController {
  constructor () {
    'ngInject';
  }
}
