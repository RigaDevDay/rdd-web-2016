export function SpeakersDirective () {
  'ngInject';

  return {
    restrict: 'E',
    templateUrl: 'app/components/speakers/speakers.html',
    scope: {},
    controller: SpeakersController,
    controllerAs: 'vm',
    bindToController: true
  };
}

class SpeakersController {
  constructor ($rootScope, $log, $modal, dataLoaderService) {
    'ngInject';

    this.$log = $log;

    dataLoaderService.getMain().then((data) => {
      this.speakers = data.speakers;
    });

    this.modalScope = $rootScope.$new();
    this.modal = $modal({
      animation: 'am-fade-and-scale',
      scope: this.modalScope,
      templateUrl: 'app/components/speakers/person-modal.html',
      show: false
    });
  }

  personModal (person) {
    this.modalScope.person = person;
    this.modal.$promise
      .then(this.modal.show)
      .catch((error) => {
        this.$log.error("Can't open person modal", error)
      });
  }
}
