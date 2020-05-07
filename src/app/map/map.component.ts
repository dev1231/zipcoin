import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#africa-map').JSMaps({
      map: 'africa',
      mapWidth:400,
      mapHeight:500,
      header:{
        'Access-Control-Allow-Origin':'*'
      } 
        });
 

  $('#nepal-map').JSMaps({
    map: 'nepal',
    header:{
      'Access-Control-Allow-Origin':'*'
    } 
      });
  }

}
