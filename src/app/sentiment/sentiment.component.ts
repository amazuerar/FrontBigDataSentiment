import { Component, OnInit, Output, EventEmitter, AfterViewInit, OnChanges } from '@angular/core';
import * as d3 from 'd3';
import { BackService } from '../provider/back.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.css']
})
export class SentimentComponent implements OnInit {

  start: any = '';
  end: any = '';
  personaje = '';
  hecho = '';
  lugar = '';
  nodes = [];
  links = [];


  ngOnInit() {
  }

  constructor(private backservice: BackService, private fb: FormBuilder) {
  }


}
