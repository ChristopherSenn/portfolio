import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PROJECTS } from '../projectsList';
import { Project } from '../project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  project: Project;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProject();
  }

  getProject() {
    const id = this.route.snapshot.paramMap.get('id');
    const projects = PROJECTS;
    for (let i = 0; i < projects.length; i++) {
      if (!projects[i].id.localeCompare(id)) {
        this.project = projects[i];
      }
    }
  }

}
