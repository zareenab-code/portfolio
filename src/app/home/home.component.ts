import { Component, OnInit } from '@angular/core';

import { ProjectsService } from '../projects/projects.service';
import { HomeService } from './home.service';
import { ResumeService } from '../resume/resume.service';
import { BasicInfo } from '../resume/resume.model';
import { Project } from '../projects/project.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  basicInfo: BasicInfo | undefined;
  projects: Project[] = [];
  buttonClicked: boolean | undefined;
  applyAnimation = false;
  constructor(
    private _projectsService: ProjectsService,
    private _homeService: HomeService,
    private _resumeService: ResumeService
  ) {}

  ngOnInit(): void {
    this.buttonClicked = this._homeService.buttonClicked;
    this.getProjects();
    this.getBasicInfo();
    setTimeout(() => {
      this.applyAnimation = true;
    }, 3000);
  }

  getProjects() {
    this.projects = this._projectsService.getProjects();
  }

  getBasicInfo() {
    this.basicInfo = this._resumeService.getBasicInfo();
  }

  onClick() {
    this._homeService.onButtonClicked();
  }
}
