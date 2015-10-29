export class DataLoaderService {
  constructor ($log, $http) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;
    this.endpoint = 'assets/data';

    this.mainResult = null;
    this.schedule = {};
  }

  getMain () {
    if (this.mainResult) {
      return this.mainResult;
    }

    this.mainResult = this.$http.get(`${this.endpoint}/main.json`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        this.$log.error('Failed to get main data', error);
      });
    return this.mainResult;
  }

  getSchedule (file) {
    if (this.schedule[file]) {
      return this.schedule[file];
    }

    this.schedule[file] = this.$http.get(`${this.endpoint}/${file}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        this.$log.error('Failed to get schedule', file, error);
      });
    return this.schedule[file];
  }
}
