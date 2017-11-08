import { Component, OnInit } from '@angular/core';
import { BackService } from '../provider/back.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { } from '@types/googlemaps';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';

declare var google;

@Component({
  selector: 'app-mapa-regional',
  templateUrl: './mapa-regional.component.html',
  styleUrls: ['./mapa-regional.component.css']
})
export class MapaRegionalComponent implements OnInit {

  lat = 4.5981;
  lng = -74.0758;

  latBog = 4.5981;
  lngBog = -74.0758;

  latClo = 3.359889;
  lngClo = -76.638565;

  latBqa = 11.0041072;
  lngBqa = -74.806981;

  latMde = 6.27053;
  lngMde = -75.572119;



  zoom = 5;

  markers;

  constructor(private mapsAPILoader: MapsAPILoader, private backservice: BackService) { }


  ngOnInit() {

    this.backservice.getTopics()
      .then(
      (data) => { // Success
        this.markers = data;
        console.log(data);
      },
      (error) => { console.error(error); }
      );

  }

  url(url) {
    return 'assets/' + url + '.png';
  }

  clicZone(zone) {
    console.log("clikc from " + zone);
  }

  latitude(url) {

    /**
    this.mapsAPILoader.load().then(() => {
      console.log('google script loaded');
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ 'address': url }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          return results[0].geometry.location.lat();
        } else {
          alert('Something got wrong ' + status);
        }
      });
    });**/
    console.log(url);
  }

  longitude(url) {

    /**
    this.mapsAPILoader.load().then(() => {
      console.log('google script loaded');
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ 'address': url }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          return results[0].geometry.location.lng();
        } else {
          alert('Something got wrong ' + status);
        }
      });
    });**/
    console.log(url);
  }

}
