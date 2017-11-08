import {
  NgModule, NgZone, Component, OnInit, Output, EventEmitter, AfterViewInit, OnChanges, ElementRef, ViewChild
} from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import * as D3 from 'd3';
import { BackService } from '../provider/back.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.css']
})
export class SentimentComponent implements OnInit {

  public loading = false;

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
    domain: ['#C7B42C', '#5AA454', '#A10A28']
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



  constructor(private elementRef: ElementRef, private backservice: BackService, private fb: FormBuilder, private ngZone: NgZone) {
  }
  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {


    this.backservice.getInfoGeneral()
      .then(
      (data) => { // Success
        this.singleAdvancedPie = data;
      },
      (error) => { console.error(error); }
      );

    this.backservice.getInfoGeneralDos()
      .then(
      (data) => { // Success
        this.multiLineChart = data;
      },
      (error) => { console.error(error); }
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
  }

  url(url) {
    return 'assets/BULLYIN/' + url + '.png';
  }


  getCloud() {
    const div = document.getElementById('cloud');
    const img = document.getElementById('imgcloud');
    div.removeChild(img);
    this.backservice.doCloud()
      .then(
      (data) => { // Success

        const timeStamp = +new Date();
        const uniqueUrl = 'http://127.0.0.1:8082/images/foo.png' + '?tsp=' + timeStamp;
        const nimg = document.createElement('img');
        nimg.setAttribute('id', 'imgcloud');
        nimg.setAttribute('src', uniqueUrl);
        div.appendChild(nimg);
      },
      (error) => { console.error(error); this.loading = false; }
      );
  }



  createImage() {

  }



  filter() {

  }



}
