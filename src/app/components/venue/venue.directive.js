/* global google:false */
export function VenueDirective () {
  'ngInject';

  return {
    restrict: 'E',
    templateUrl: 'app/components/venue/venue.html',
    scope: {},
    controller: VenueController,
    controllerAs: 'vm',
    bindToController: true
  };
}

class VenueController {
  constructor () {
    'ngInject';

    let center = {latitude: 56.946333, longitude: 24.116870};
    this.map = {
      center: center,
      zoom: 13,
      options: {
        zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_CENTER
        },
        mapTypeControl: false,
        streetViewControl: false,
        panControl: false,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
          {
            "stylers": [{"hue": "#00aaff"}, {"saturation": -23}, {"gamma": 1.37}, {"lightness": -5}]
          }
        ]
      }
    };

    this.marker = {
      idKey: 'place',
      position: center,
      options: {
        title: 'Riga Dev Day 2016',
        icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
        labelContent: 'Kino Citadele',
        labelAnchor: "46 -5",
        labelClass: 'map-label'
      }
    }
  }
}
