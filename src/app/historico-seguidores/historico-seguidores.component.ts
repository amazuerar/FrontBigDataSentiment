import { Component, OnInit } from '@angular/core';
import { BackService } from '../provider/back.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

declare var google: any;

@Component({
  selector: 'app-historico-seguidores',
  templateUrl: './historico-seguidores.component.html',
  styleUrls: ['./historico-seguidores.component.css']
})
export class HistoricoSeguidoresComponent implements OnInit {

  lat = 4.5981;
  lng = -74.0758;
  zoom = 6;

  markers;


  constructor(private backservice: BackService) { }



  ngOnInit() {

    this.backservice.getGeo()
      .then(
      (data) => { // Success
        this.markers = data;
        console.log(data);
      },
      (error) => { console.error(error); }
      );

      this.coordinates('miami');
  }

  url(url) {
    return 'assets/' + url + '.png';
  }

  coordinates(url) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': url }, function (results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        alert('location : ' + results[0].geometry.location.lat() + ' ' + results[0].geometry.location.lng());
      } else {
        alert('Something got wrong ' + status);
      }
    });
  }

}
