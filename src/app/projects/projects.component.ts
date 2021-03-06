import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  constructor(private _projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projects = this._projectsService.getProjects();
  }
}
