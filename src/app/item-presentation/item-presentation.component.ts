import { Component, OnInit } from '@angular/core';
import { Presentation } from '../Presentation'

@Component({
  selector: 'app-item-presentation',
  templateUrl: './item-presentation.component.html',
  styleUrls: ['./item-presentation.component.css']
})

export class ItemPresentationComponent implements OnInit {

  presentation: Presentation[] = [
    {
      id: 1,
      title: 'Experiencia',
      text: 'Enterate más sobre mi recorrido empresarial, lo que me ha permitido crecer en esta industria y estar a la vanguardia en las areas de TI.',
      txtlink: 'conocer más',
      link:'experiencia'
    },
    {
      id: 2,
      title: 'Quién Soy',
      text: 'Descubre un poco mas de mi mundo, mis hobbys, conocimientos y expectativas que tengo con proyección a mi desarrollo personal.',
      txtlink: 'conocer más',
      link:'conoceme'
    },
    {
      id: 3,
      title: 'Estudios',
      text: 'Saber aprobechar cada oportunidad de conocimiento por parte de grandes canales que atraves de youtube o desde sus propios sitios web illustran y son generadores de ideas.',
      txtlink: 'conocer más',
      link:'estudios'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
