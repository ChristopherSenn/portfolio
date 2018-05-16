import { Component, OnInit } from '@angular/core';
import { PROJECTS } from './projectsList';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = PROJECTS;
  imagePath = '/assets/images/projects/';

  constructor() {
  }

  ngOnInit() {
    const items = document.getElementsByClassName('item');
    for (let i = 0; i < items.length; i++) {
      const elem: HTMLElement = <HTMLElement> items[i];
      elem.onmousemove = this.updatePosition;
    }
  }

  updatePosition(e: MouseEvent) {
    let elem: HTMLElement = <HTMLElement> e.target;
    if (elem.nodeName === 'image' || elem.nodeName === 'text') { // fixes elem depending if the event gets triggered by the image or svg
      elem = elem.parentElement.parentElement;
    }
    elem = <HTMLElement> elem.firstElementChild.firstElementChild.firstElementChild;

    elem.setAttribute('cx', '' + e.offsetX);
    elem.setAttribute('cy', '' + e.offsetY);
  }
}
