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
  viewLineChart: number[] = [1000, 300];
  colorSchemeLineChart = {
    domain: ['#C7B42C', '#5AA454', '#A10A28']
  };
  multiLineChart: any[];
  multiLineChartDos: any[];
  gradientLineChart = true;
  showLegendLineChart = true;
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Fechas';
  showYAxisLabel = true;
  yAxisLabel = 'Número de Tweets';
  autoScale = true;

  // HISTORICO FOLLOWERS
  viewLineChartFollowers: number[] = [1000, 300];
  colorSchemeLineChartFollowers = {
    domain: ['#C7B42C', '#5AA454', '#A10A28']
  };
  multiLineChartFollowers: any[];
  gradientLineChartFollowers = true;
  showLegendLineChartFollowers = true;
  showXAxisFollowers = true;
  showYAxisFollowers = true;
  gradientFollowers = false;
  showLegendFollowers = true;
  showXAxisLabelFollowers = false;
  xAxisLabelFollowers = 'Fechas';
  showYAxisLabelFollowers = false;
  yAxisLabelFollowers = 'Número de Segidores';
  autoScaleFollowers = true;
  nameFollowers = 'CGurisattiNTN24';

  markers;




  constructor(private backservice: BackService, private fb: FormBuilder, private ngZone: NgZone) {
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




    this.backservice.getGeo()
      .then(
      (data) => { // Success
        this.markers = data;
      },
      (error) => { console.error(error); }
      );
  }



  onImageFollowerClick(name) {
    this.nameFollowers = name;
    this.backservice.getFollowers(this.nameFollowers)
      .then(
      (data) => { // Success

        this.multiLineChartFollowers = [...data];
      },
      (error) => { console.error(error); }
      );
  }



  filter() {

  }



}
