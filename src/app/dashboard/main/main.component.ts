import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3'
import * as t from 'topojson';
import { HttpClient } from '@angular/common/http';
import { DeviceService } from 'src/app/shared/device.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  mps:any[] = []

  lat = 19.07283;
  lon = 72.88261;

  constructor(private http:HttpClient,private ds:DeviceService) { }

ngOnInit() {
    
    this.ds.getAllMediaPlayer().subscribe((mps:any[])=>{
      this.mps = mps;
      if(this.mps.length>=1){
        this.lat = this.mps[0].geopoint.lat;
        this.lon = this.mps[0].geopoint.lon;
  
        console.log(this.lat,this.lon)
     }
    })
    
  }

}
