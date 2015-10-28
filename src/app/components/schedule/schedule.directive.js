export function ScheduleDirective () {
  'ngInject';

  return {
    restrict: 'E',
    templateUrl: 'app/components/schedule/schedule.html',
    scope: {},
    controller: ScheduleController,
    controllerAs: 'vm',
    bindToController: true
  };
}

class ScheduleController {
  constructor (dataLoaderService) {
    'ngInject';

    this.dataLoaderService = dataLoaderService;

    this.days = [];
    this.schedule = null;
    this.rooms = null;
    this.tracks = null;

    dataLoaderService.getMain()
      .then((data) => {
        this.days = data.days;
        return this.days[0];
      })
      .then(this.loadSchedule.bind(this))
  }

  loadDay (dayNumber) {
    return this.loadSchedule(this.days[dayNumber]);
  }

  loadSchedule (day) {
    return this.dataLoaderService.getSchedule(day.file)
      .then((data) => {
        this.schedule = data.schedule;
        this.rooms = data.roomNames;
        this.tracks = data.trackNames;

        return data;
      });
  }
}
