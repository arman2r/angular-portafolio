import { Component, OnInit } from '@angular/core';
import * as M from '../../assets/materialize-v1.0.0/materialize/js/materialize.min.js';

@Component({
  selector: 'app-parallax-container',
  templateUrl: './parallax-container.component.html',
  styleUrls: ['./parallax-container.component.css']
})
export class ParallaxContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  }

}
