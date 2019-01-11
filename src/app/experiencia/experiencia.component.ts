import { Component, OnInit } from '@angular/core';
import * as M from '../../assets/materialize-v1.0.0/materialize/js/materialize.min.js';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  constructor() { }

  options = {
    shift: 0,
    dist: 0,
    numVisible: 7,
    indicators: false,
    noWrap: true 
  }

  ngOnInit() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, this.options);
  }

}
