import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/**
 * Servicio para retornar noticias y colaboradores de la universidad de los andes con su respectiva informacion
 * @export
 * @class BackService
 */

@Injectable()
export class BackService {

  // address = "172.24.100.104";
  address = '127.0.0.1';
  port = '8082';

  /**
   * Crea una instancia del componente servicio RssService.
   * @param {Http} http paquete de angular necesario para hacer peticiones http
   * @memberof BackService
   */
  constructor(private http: Http) { }

  getInfoGeneral() {
    return this.http.get('http://' + this.address + ':' + this.port + '/general')
      .map(res => res.json())
      .toPromise()
  }

  getInfoGeneralDos() {
    return this.http.get('http://' + this.address + ':' + this.port + '/generalDos')
      .map(res => res.json())
      .toPromise()
  }

  getFollowers(name) {
    return this.http.get('http://' + this.address + ':' + this.port + '/followers/' + name)
      .map(res => res.json())
      .toPromise()
  }

  getFollowersAll() {
    return this.http.get('http://' + this.address + ':' + this.port + '/followersAll')
      .map(res => res.json())
      .toPromise()
  }

    getLastTweetsByAccount(name) {
    return this.http.get('http://' + this.address + ':' + this.port + '/getLastTweetsByAccount/' + name)
      .map(res => res.json())
      .toPromise()
  }

  getLastReplayByTweetID(id) {
    return this.http.get('http://' + this.address + ':' + this.port + '/getLastReplayByTweetID/' + id)
      .map(res => res.json())
      .toPromise()
  }


  getGeo() {
    return this.http.get('http://' + this.address + ':' + this.port + '/geo')
      .map(res => res.json())
      .toPromise()
  }





}
