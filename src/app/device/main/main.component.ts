import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/shared/device.service';
import { toTypeScript } from '@angular/compiler';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  action = null;

  mps = [];

  constructor(private ds:DeviceService) { }

  ngOnInit() {
    this.getMps();
  }

  onAdd(data){
    this.action = null;
    console.log(data);
    this.ds.createMediaPlayer(data).subscribe(d=>{
      console.log(d);
    })
  }

  getMps(){
    this.ds.getAllMediaPlayer().subscribe((d:any[])=>this.mps = d)
  }

}
