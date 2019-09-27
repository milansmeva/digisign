import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3'
import * as t from 'topojson';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  pins:any[] = [
    { label: "Mumbai Main", cords: [19.07283, 72.88261] },
    { label: "Ahmedabad CCD", cords: [23.0225, 72.5714] },
    { label: "Hyd Foodway", cords: [17.3850, 78.4867] },
    { label: "Blr Dominos", cords: [12.9716, 77.5946] },
    { label: "Pune Infosys", cords: [18.5204, 73.8567] },
    {label:"USA",cords:[37.0902, 95.7129]}
  ]

  title = 'My first AGM project';
  lat = 19.07283;
  lng = 72.88261;

  constructor(private http:HttpClient) { }

ngOnInit() {

    // this.http.get('http://192.168.43.31:8080/mediaplayer/GetallMediaPlayersForUsers?username=admin').subscribe((data:any[])=>{
    //   this.pins = data;
    //   console.log(data)
    // });

  }

}
