import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PROJECTS } from './projectsList';
import { element } from 'protractor';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  projects = PROJECTS;
  imagePath = '/assets/images/projects/';

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const ids = document.getElementsByClassName('addId');
      const clipPaths = document.getElementsByClassName('addClipPath');

      for (let i = 0; i < ids.length; i++) {
        ids[i].setAttribute('id', PROJECTS[i].id);
        clipPaths[i].setAttribute('clip-path', ('url(#' + PROJECTS[i].id + ')'));
      }
      for ( let i = 0; i < clipPaths.length; i++) {
        const content = ids[i].innerHTML;
        ids[i].innerHTML = content;
        const content2 = clipPaths[i].innerHTML;
        clipPaths[i].innerHTML = content2;
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
