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

  ciudad = '';
  infoTweets: any[];
  public loading = false;

  lat = 5.5981;
  lng = -74.357557;

  latBog = 4.5981;
  lngBog = -74.0758;

  latClo = 3.451647;
  lngClo = -76.531985;

  latBqa = 11.0041072;
  lngBqa = -74.806981;

  latMde = 6.27053;
  lngMde = -75.572119;

  latCtg = 10.391049;
  lngCtg = -75.479426;

  latPoy = 2.444814;
  lngPoy = -76.614739;

  latPas = 1.205884;
  lngPas = -77.285787;

  latNei = 2.934484;
  lngNei = -75.280900;

  latBuc = 7.119349;
  lngBuc = -73.122742;

  latPer = 4.808717;
  lngPer = -75.690601;

  latTun = 5.544642;
  lngTun = -73.357557;



  zoom = 6;

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
    console.log('clikc from ' + zone);
    this.ciudad = zone;
  }

  selectTopic(tema) {
    if (this.ciudad === '') {
      alert('Debe seleccionar una ciudad');
    } else {
      this.loading = true;
      const ciudad = this.ciudad;
      this.backservice.getUsersByCityandByTopic(ciudad, tema)
        .then(
        (data) => { // Success
          this.infoTweets = [...data];
          this.loading = false;
        },
        (error) => { console.error(error); this.loading = false; }
        );
    }
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
