import { Component, OnInit, NgModule, enableProdMode, ViewChild, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HotelDetailComponent } from '../hotel-detail/hotel-detail.component';
import { WatsonService } from '../services/watson.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { YelpService } from '../services/yelp.service';
import pattern from 'patternomaly';
import Chart from 'chart.js';
import { Color } from 'ng2-charts';


@Component({
  selector: 'app-bar-gauge',
  templateUrl: './bar-gauge.component.html',
  styleUrls: ['./bar-gauge.component.css']
})

export class BarGaugeComponent implements OnInit {
  @Input() sentimentAnalyses: any;

  // Doughnut

  constructor() { }

  public doughnutChartLabels: string[] = ['Negative', 'Positive', 'Neutural'];

  public lineChartColors: Array<any> = [
    {
      backgroundColor: ['rgba(168, 3, 3, 0.897)', '#00CA4C', 'rgb(253, 170, 16)'],
      borderColor: ['rgba(168, 3, 3, 0.897)', '#00CA4C', 'rgb(253, 170, 16)'],
      pointBackgroundColor: ['rgba(168, 3, 3, 0.897)', '#00CA4C', 'rgb(253, 170, 16)'],
      pointBorderColor: ['rgba(168, 3, 3, 0.897)', '#00CA4C', 'rgb(253, 170, 16)'],
      pointHoverBackgroundColor: ['rgba(168, 3, 3, 0.897)', '#00CA4C', 'rgb(253, 170, 16)'],
      pointHoverBorderColor: ['rgba(168, 3, 3, 0.897)', '#00CA4C', 'rgb(253, 170, 16)']
    },
  ];


  public doughnutChartData: number[] = [];
  public doughnutChartType: String = 'doughnut';


  ngOnInit() {
    console.log('sentiment!!!!!!!!!!', this.sentimentAnalyses);
    this.doughnutChartData = this.sentimentAnalyses;

}

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
