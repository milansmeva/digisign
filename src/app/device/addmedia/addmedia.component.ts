import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NullTemplateVisitor } from '@angular/compiler';

@Component({
  selector: 'app-addmedia',
  templateUrl: './addmedia.component.html',
  styleUrls: ['./addmedia.component.scss']
})
export class AddmediaComponent implements OnInit {

  @Output('onAdd') onAdd = new EventEmitter<any>();



  model = {
    id:"",
    name:"",
    password:"",
    geopoint:{
      lat:"",
      lon:""
    }
  }

  error = null;
  msg = null;

  isMarked = false;

  constructor() { }

  ngOnInit() {
  }

  submit(){
    this.onAdd.emit(this.model);
  }

  mapClick(event){
    console.log(event.coords)
      this.model.geopoint = {lat:event.coords.lat,lon:event.coords.lng};
      this.isMarked = true;
  
  }
  
}
