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

  ngOnInit() {}
}
