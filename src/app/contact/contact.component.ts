import { Component, OnInit } from '@angular/core';
import { PROJECTS } from '../projects/projectsList';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  projects = PROJECTS;

  constructor() {
  }

  ngOnInit() {
    const items = document.getElementsByClassName('item');
    for (let i = 0; i < items.length; i++) {
      items[i].onmousemove = this.updatePosition;
    }
  }

  updatePosition(e: MouseEvent) {
    let elem = e.target;
    elem = elem.parentElement.parentElement;
    elem = elem.firstElementChild.firstElementChild.firstElementChild;
    console.log(e.target);
    elem.setAttribute('cx', '' + e.offsetX);
    elem.setAttribute('cy', '' + e.offsetY);
  }

}
