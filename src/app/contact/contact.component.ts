import { Component, OnInit } from '@angular/core';
import { PROJECTS } from '../projects/projectsList';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  projects = PROJECTS;
  imagePath = '/assets/images/projects/';

  constructor() {
  }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function() {
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
      /*somehow only works in html
      const items = document.getElementsByClassName('item');
      for (let i = 0; i < items.length; i++) {
        const elem: HTMLElement = <HTMLElement> items[i];
        // elem.setAttribute('onmousemove', 'updatePosition()');
        // (mousemove)="updatePosition($event)"
        elem.onmousemove = this.updatePosition;
        // elem.addEventListener('onclick', this.updatePosition);
        console.log(elem);
      }*/
    });


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
