import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatDialog } from '@angular/material/dialog';

import { Project } from '../project.model';
import { ProjectsService } from '../projects.service';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit, OnDestroy {
  @Input()
  projects: Project[] | undefined;

  selectedProject: Project | undefined;

  isExtraSmallDevice: Boolean | undefined;
  isSmallDevice: Boolean | undefined;
  isMediumDevice: Boolean | undefined;
  isLargeDevice: Boolean | undefined;
  isExtraLargeDevice: Boolean | undefined;

  watcher: Subscription;

  constructor(
    private _projectService: ProjectsService,
    public dialog: MatDialog,
    mediaObserver: MediaObserver
  ) {
    this.watcher = mediaObserver
      .asObservable()
      .subscribe((changes: MediaChange[]) => {
        if (changes[0].mqAlias == 'xs') {
          this.isExtraSmallDevice = true;
        } else {
          this.isExtraSmallDevice = false;
        }

        if (changes[0].mqAlias == 'sm') {
          this.isSmallDevice = true;
        } else {
          this.isSmallDevice = false;
        }

        if (changes[0].mqAlias == 'md') {
          this.isMediumDevice = true;
        } else {
          this.isMediumDevice = false;
        }

        if (changes[0].mqAlias == 'lg') {
          this.isLargeDevice = true;
        } else {
          this.isLargeDevice = false;
        }

        if (changes[0].mqAlias == 'xl') {
          this.isExtraLargeDevice = true;
        } else {
          this.isExtraLargeDevice = false;
        }
      });
  }

  ngOnInit(): void {}

  projectDetails(projectId: number) {
    const project = this._projectService.getProject(projectId);
    this.dialog.open(ProjectComponent, {
      data: project,
      width: '600px',
    });
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }
}
