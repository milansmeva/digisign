import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3'
import * as t from 'topojson';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  pins = [
    { label: "Mumbai Main", cords: [19.07283, 72.88261] },
    { label: "Ahmedabad CCD", cords: [23.0225, 72.5714] },
    { label: "Hyd Foodway", cords: [17.3850, 78.4867] },
    { label: "Blr Dominos", cords: [12.9716, 77.5946] },
    { label: "Pune Infosys", cords: [18.5204, 73.8567] },
    {label:"USA",cords:[37.0902, 95.7129]}
  ]

  constructor() { }

  ngOnInit() {
    let self = this;

    let width = 900;
    let height = 600;

    let projection = d3.geoMercator();

    let svg = d3.select('#map').append('svg')
      .attr('width', width)
      .attr('height', height);
    let path = d3.geoPath()
      .projection(projection);
    let g = svg.append('g');
    g.attr('class', 'map');

    d3.json("https://raw.githubusercontent.com/cszang/dendrobox/master/data/world-110m2.json")
      // d3.json("https://raw.githubusercontent.com/cszang/dendrobox/5199e47bf6c403a2e9f28bec3b764a2fe23ce359/data/maps.json")

      .then(function (topology) {
        // <---- Renamed it from data to topology
        console.log("------>", topology.feature);
        g.selectAll('path')
          .data(t.feature(topology, topology.objects.countries).features)
          //.data(t.feature(topology, topology.objects.countries)
          //  .geometries)
          .enter()
          .append('path')
          .attr('d', path)

        svg.selectAll('.mark')
          .data(self.pins)
          .enter()
          .append("image")
          .attr('class', 'mark')
          .attr('width', 20)
          .attr('height', 20)
          .attr("xlink:href", 'https://cdn3.iconfinder.com/data/icons/softwaredemo/PNG/24x24/DrawingPin1_Blue.png')
          .attr("transform", d => `translate(${projection([d.cords[1],d.cords[0]])})`);
      });




  }

}
