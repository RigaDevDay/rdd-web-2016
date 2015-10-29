export function TeamDirective () {
  'ngInject';

  return {
    restrict: 'E',
    templateUrl: 'app/components/team/team.html',
    scope: {},
    controller: TeamController,
    controllerAs: 'vm',
    bindToController: true
  };
}

class TeamController {
  constructor (dataLoaderService) {
    'ngInject';

    this.staff = [];

    dataLoaderService.getMain()
      .then((data) => {
        this.staff = data.staff;
      })
  }
}
