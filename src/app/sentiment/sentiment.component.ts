import {
  NgModule, NgZone, Component, OnInit, Output, EventEmitter, AfterViewInit, OnChanges, ElementRef, ViewChild
} from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import * as D3 from 'd3';
import { BackService } from '../provider/back.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.css']
})
export class SentimentComponent implements OnInit {

  public loading = false;
  userNatureName = '';
  userNature = '';

  personajes = [
    'CGurisattiNTN24',
    'DanielSamperO',
    'ELTIEMPO',
    'elespectador',
    'NoticiasCaracol',
    'NoticiasRCN',
    'CaracolRadio',
    'BluRadioCo',
    'JuanManSantos',
    'ClaudiaLopez',
    'German_Vargas',
    'AlvaroUribeVel',
    'AndresPastrana_',
    'TimoFARC',
    'OIZuluaga',
    'A_OrdonezM',
    'JSantrich_FARC',
    'IvanDuque',
    'mluciaramirez',
    'petrogustavo',
    'DeLaCalleHum',
    'FARC_EPaz'
  ];



  // DASHBORAD ADVANCED PIE

  viewAdvancedPie: number[] = [800, 300];
  colorSchemeAdvancedPie = {
    domain: ['#0000FF', '#C7B42C', '#5AA454', '#A10A28']
  };
  singleAdvancedPie: any[];
  tooltipAdvancedPie = true;
  gradientAdvancedPie = true;


  // DASHBOARD LINE CHART
  viewLineChart: number[] = [900, 300];
  colorSchemeLineChart = {
    domain: ['#C7B42C', '#5AA454', '#A10A28']
  };
  multiLineChart: any[];
  multiLineChartDos: any[];
  gradientLineChart = true;
  showLegendLineChart = false;
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showXAxisLabel = true;
  xAxisLabel = 'Fechas';
  showYAxisLabel = true;
  yAxisLabel = 'Número de Tweets';
  autoScale = true;

  // DASHBOARD TONALIDAD DE LO QUE HABLAN LOS INFLUENCIADORES

  viewTonalidadInf: any[] = [900, 400];
  multiTonalidadInf: any[];
  // options
  showXAxisTonalidadInf = true;
  showYAxisTonalidadInf = true;
  gradientTonalidadInf = false;
  showLegendTonalidadInf = false;
  showXAxisLabelTonalidadInf = true;
  xAxisLabelTonalidadInf = 'Usuarios analizados';
  showYAxisLabelTonalidadInf = true;
  yAxisLabelTonalidadInf = 'Polaridad con la que hablan los twitteros';

  colorSchemeTonalidadInf = {
    domain: ['#0000FF', '#5AA454', '#A10A28', '#C7B42C']
  };


  // DASHBOARD TONALIDAD COMO HABLAN DE LOS INFLUENCIADORES



  // HISTORICO FOLLOWERS
  viewLineChartFollowers: number[] = [1000, 500];
  colorSchemeLineChartFollowers = {
    domain: ['#0000FF', '#5AA454', '#A10A28']
  };
  multiLineChartFollowers: any[];
  gradientLineChartFollowers = true;
  showLegendLineChartFollowers = false;
  showXAxisFollowers = true;
  showYAxisFollowers = true;
  gradientFollowers = false;
  showLegendFollowers = true;
  showXAxisLabelFollowers = true;
  xAxisLabelFollowers = 'Fechas';
  showYAxisLabelFollowers = true;
  yAxisLabelFollowers = 'Número de Seguidores';
  autoScaleFollowers = true;
  nameFollowers = 'A_OrdonezM';


  // HISTORICO FOLLOWERS ALL
  viewLineChartFollowersAll: number[] = [1200, 500];
  colorSchemeLineChartFollowersAll = {
    domain: ['#0000FF', '#5AA454', '#A10A28']
  };
  multiLineChartFollowersAll: any[];
  gradientLineChartFollowersAll = true;
  showLegendLineChartFollowersAll = true;
  showXAxisFollowersAll = true;
  showYAxisFollowersAll = true;
  gradientFollowersAll = false;
  showLegendFollowersAll = true;
  showXAxisLabelFollowersAll = true;
  xAxisLabelFollowersAll = 'Fechas';
  showYAxisLabelFollowersAll = true;
  yAxisLabelFollowersAll = 'Número de Seguidores';
  autoScaleFollowersAll = true;


  // INDICE DE MATONEO
  nameMatone = '';

  tweetsByAccount: any[];
  replayTweetsByID: any[];
  replaySentimentTweetsByID: any[];

  viewGaugeMatone: number[] = [500, 300];
  colorSchemeGauge = {
    domain: ['#A10A28', '#5AA454', '#C7B42C']
  };
  dataGauge: any[];
  maxGauge;
  viewMatonePie: number[] = [500, 300];
  colorSchemeMatonePie = {
    domain: ['#A10A28', '#5AA454', '#C7B42C']
  };
  tooltipMatonePie = true;
  gradientMatonePie = true;


  // GRAFICAS DE BARRAS DE TEMAS DE INTERES

  singleTopicsAll: any[];
  singleTopicsUser: any[];
  singleTopicsUsedByUser: any[];
  nameTopics;


  // options
  viewTopicsAll: any[] = [500, 300];
  showXAxisTopicsAll = true;
  showYAxisTopicsAll = true;
  gradientTopicsAll = false;
  showLegendTopicsAll = true;
  showXAxisLabelTopicsAll = true;
  xAxisLabelTopicsAll = '';
  showYAxisLabelTopicsAll = true;
  yAxisLabelTopicsAll = '';


  // options
  viewTopicsUser: any[] = [500, 300];
  showXAxisTopicsUser = true;
  showYAxisTopicsUser = true;
  gradientTopicsUser = false;
  showLegendTopicsUser = true;
  showXAxisLabelTopicsUser = true;
  xAxisLabelTopicsUser = '';
  showYAxisLabelTopicsUser = true;
  yAxisLabelTopicsUser = '';

  // options
  viewTopicsUsedByUser: any[] = [500, 300];
  showXAxisTopicsUsedByUser = true;
  showYAxisTopicsUsedByUser = true;
  gradientTopicsUsedByUser = false;
  showLegendTopicUsedByUser = true;
  showXAxisLabelTopicsUsedByUser = true;
  xAxisLabelTopicsUsedByUser = '';
  showYAxisLabelTopicsUsedByUser = true;
  yAxisLabelTopicsUsedByUser = '';
  colorSchemeTopicsUsedByUse = {
    domain: ['#1D68FB', '#33C0FC', '#4AFFFE', '#AFFFFF', '#FFFC63', '#FDBD2D', '#5AA454', '#FC8A25', '#FA4F1E', '#FA141B', '#BA38D1']
  };

  // GRAFICAS TAG CLOUD

  tagCloudHashTags: any[];
  tweetsbyHashInCloud: any[];

  // ENGLISH TWEETS TABLE
  englishTeets: any[];

  constructor(private elementRef: ElementRef, private backservice: BackService, private fb: FormBuilder, private ngZone: NgZone) {
  }
  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {

    this.loading = true;
    this.backservice.getInfoGeneral()
      .then(
      (data) => { // Success
        this.singleAdvancedPie = data; this.loading = false;
      },
      (error) => { console.error(error); this.loading = false; }
      );

    this.loading = true;
    this.backservice.getInfoGeneralDos()
      .then(
      (data) => { // Success
        this.multiLineChart = data; this.loading = false;
      },
      (error) => { console.error(error); this.loading = false; }
      );

    this.loading = true;
    this.backservice.getInfoGeneralTres()
      .then(
      (data) => { // Success
        this.multiTonalidadInf = data; this.loading = false;
      },
      (error) => { console.error(error); this.loading = false; }
      );

    this.backservice.getFollowers(this.nameFollowers)
      .then(
      (data) => { // Success
        this.multiLineChartFollowers = [...data];
      },
      (error) => { console.error(error); }
      );

    this.backservice.getFollowersAll()
      .then(
      (data) => { // Success
        this.multiLineChartFollowersAll = [...data];
      },
      (error) => { console.error(error); }
      );


    this.backservice.getFrequencyByTopic()
      .then(
      (data) => { // Success
        this.singleTopicsAll = [...data];
      },
      (error) => { console.error(error); }
      );

    this.loading = true;
    this.backservice.getEnglishTweets()
      .then(
      (data) => { // Success
        this.englishTeets = [...data]; this.loading = false;
      },
      (error) => { console.error(error); this.loading = false; }
      );



  }



  onImageFollowerClick(name) {
    this.loading = true;
    this.nameFollowers = name;
    this.backservice.getFollowers(this.nameFollowers)
      .then(
      (data) => { // Success
        this.multiLineChartFollowers = [...data];
        this.loading = false;
      },
      (error) => { console.error(error); this.loading = false; }
      );
  }

  onImageGetTweetsClick(name) {
    this.nameMatone = name;
    this.dataGauge = [];
    this.userNature = '';
    this.userNatureName = '';
    this.tweetsByAccount = [];
    this.replayTweetsByID = [];
    this.loading = true;
    this.backservice.getLastTweetsByAccount(name)
      .then(
      (data) => { // Success
        this.tweetsByAccount = [...data];
        this.loading = false;

      },
      (error) => { console.error(error); this.loading = false; }
      );
  }

  onClickButtonLastTweets(id) {
    this.replayTweetsByID = [];
    this.userNature = '';
    this.userNatureName = '';
    this.loading = true;
    this.backservice.getLastReplayByTweetID(id)
      .then(
      (data) => { // Success
        this.replayTweetsByID = [...data];
        this.loading = false;
      },
      (error) => { console.error(error); this.loading = false; }
      );

    this.loading = true;
    this.backservice.getLastSentimentReplayByTweetID(id)
      .then(
      (data) => { // Success
        this.dataGauge = [...data];
        this.loading = false;
      },
      (error) => { console.error(error); this.loading = false; }
      );
  }

  onClickImageTopicsGetFrequencyByTopicByUsername(name) {
    this.loading = true;
    this.nameTopics = name;

    this.backservice.getFrequencyByTopicByUsername(name)
      .then(
      (data) => { // Success
        this.singleTopicsUser = [...data];
        this.loading = false;
      },
      (error) => { console.error(error); this.loading = false; }
      );

    this.loading = true;
    this.backservice.getFrequencyByTopicUsedByUser(name)
      .then(
      (data) => { // Success
        this.singleTopicsUsedByUser = [...data];
        this.loading = false;
      },
      (error) => { console.error(error); this.loading = false; }
      );
  }




  getCloud(name) {
    this.loading = true;
    this.tagCloudHashTags = [];
    this.tweetsbyHashInCloud = [];
    const div = document.getElementById('cloud');
    const img = document.getElementById('imgcloud');
    div.removeChild(img);
    this.backservice.doCloudUser(name)
      .then(
      (data) => { // Success

        this.tagCloudHashTags = [...data];

        const timeStamp = +new Date();
        const uniqueUrl = 'http://172.24.100.104:8082/images/foo.png' + '?tsp=' + timeStamp;
        const nimg = document.createElement('img');
        nimg.setAttribute('id', 'imgcloud');
        nimg.setAttribute('src', uniqueUrl);
        nimg.style.cssText = 'width:100%;height:100%;';
        div.appendChild(nimg);
        this.loading = false;
      },
      (error) => {
        console.error(error);
        this.loading = false;
        const uniqueUrl = 'assets/nothing.png';
        const nimg = document.createElement('img');
        nimg.setAttribute('id', 'imgcloud');
        nimg.setAttribute('src', uniqueUrl);
        nimg.style.cssText = 'width:100%;height:100%;';
        div.appendChild(nimg);
      }
      );
  }

  getCloudTopic(topic) {
    this.loading = true;
    this.tagCloudHashTags = [];
    this.tweetsbyHashInCloud = [];
    const div = document.getElementById('cloud');
    const img = document.getElementById('imgcloud');
    div.removeChild(img);
    this.backservice.doCloudTopic(topic)
      .then(
      (data) => { // Success

        this.tagCloudHashTags = [...data];

        const timeStamp = +new Date();
        const uniqueUrl = 'http://172.24.100.104:8082/images/foo.png' + '?tsp=' + timeStamp;
        const nimg = document.createElement('img');
        nimg.setAttribute('id', 'imgcloud');
        nimg.setAttribute('src', uniqueUrl);
        nimg.style.cssText = 'width:100%;height:100%;';
        div.appendChild(nimg);
        this.loading = false;
      },
      (error) => {
        console.error(error);
        this.loading = false;
        const uniqueUrl = 'assets/nothing.png';
        const nimg = document.createElement('img');
        nimg.setAttribute('id', 'imgcloud');
        nimg.setAttribute('src', uniqueUrl);
        nimg.style.cssText = 'width:100%;height:100%;';
        div.appendChild(nimg);
      }
      );
  }

  getTweetsByhash(hash) {
    this.tweetsbyHashInCloud = [];
    const splitted = hash.split(' ', 1);
    const newhash = splitted[0].replace('#', '');

    this.tweetsbyHashInCloud = [];
    this.loading = true;
    this.backservice.getTweetsbyHashInCloud(newhash)
      .then(
      (data) => { // Success
        this.tweetsbyHashInCloud = [...data]; this.loading = false;
      },
      (error) => { console.error(error); this.loading = false; }
      );

  }


  url(url) {
    return 'assets/BULLYIN/' + url + '.png';
  }

  twitterUrl(name) {
    window.open('https://twitter.com/' + name + '?lang=es');
  }

  getNature(name) {
    this.loading = false;
    this.userNatureName = '';
    this.userNatureName = name;
    this.backservice.getUserNature(name)
      .then(
      (data) => { // Success
        this.userNature = data[0].user_category; this.loading = false;
      },
      (error) => { console.error(error); this.loading = false; }
      );
  }

  natureImg() {
    return 'assets/' + this.userNature + '.png';
  }

  englishUrl(rate)
  {
    return 'assets/' + rate + '.png';
  }




}
