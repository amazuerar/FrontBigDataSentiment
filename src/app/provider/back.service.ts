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

  getInfoGeneralTres() {
    return this.http.get('http://' + this.address + ':' + this.port + '/getInfoGeneralCuatro')
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

  getLastSentimentReplayByTweetID(id) {
    return this.http.get('http://' + this.address + ':' + this.port + '/getLastSentimentReplayByTweetID/' + id)
      .map(res => res.json())
      .toPromise()
  }


  getGeo() {
    return this.http.get('http://' + this.address + ':' + this.port + '/geo')
      .map(res => res.json())
      .toPromise()
  }

  getTopics() {
    return this.http.get('http://' + this.address + ':' + this.port + '/topics')
      .map(res => res.json())
      .toPromise()
  }

  getFrequencyByTopic() {
    return this.http.get('http://' + this.address + ':' + this.port + '/getFrequencyByTopic')
      .map(res => res.json())
      .toPromise()
  }

  getFrequencyByTopicByUsername(name) {
    return this.http.get('http://' + this.address + ':' + this.port + '/getFrequencyByTopicByUsername/' + name)
      .map(res => res.json())
      .toPromise()
  }

  getFrequencyByTopicUsedByUser(name) {
    return this.http.get('http://' + this.address + ':' + this.port + '/getFrequencyByTopicUsedByUser/' + name)
      .map(res => res.json())
      .toPromise()
  }

  doCloudUser(user) {
    return this.http.get('http://' + this.address + ':' + this.port + '/cloudUser/' + user)
      .map(res => res.json())
      .toPromise()
  }

  doCloudTopic(topic) {
    return this.http.get('http://' + this.address + ':' + this.port + '/cloudTopic/' + topic)
      .map(res => res.json())
      .toPromise()
  }

  getTweetsbyHashInCloud(hash) {
    return this.http.get('http://' + this.address + ':' + this.port + '/getTweetsByHastag/' + hash)
      .map(res => res.json())
      .toPromise()
  }

  getUsersByCityandByTopic(ciudad, tema) {
    return this.http.get('http://' + this.address + ':' + this.port + '/getUsersByCityandByTopic/' + ciudad + '/' + tema)
      .map(res => res.json())
      .toPromise()
  }

  getUserNature(name) {
    return this.http.get('http://' + this.address + ':' + this.port + '/getUserNature/' + name)
      .map(res => res.json())
      .toPromise()
  }

  getEnglishTweets() {
    return this.http.get('http://' + this.address + ':' + this.port + '/getEnglishTweets')
      .map(res => res.json())
      .toPromise()
  }





}
