import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

import { Project } from '../../project.model';

@Component({
  selector: 'app-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.css'],
})
export class ProjectListItemComponent implements OnInit, OnDestroy {
  @Input()
  project: Project | undefined;
  @Output() projectClicked = new EventEmitter<number>();
  isExtraSmallDevice: Boolean | undefined;
  isSmallDevice: Boolean | undefined;
  isMediumDevice: Boolean | undefined;
  isLargeDevice: Boolean | undefined;
  isExtraLargeDevice: Boolean | undefined;

  watcher: Subscription;

  constructor(mediaObserver: MediaObserver) {
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

  projectDetails(projectId: number | undefined) {
    this.projectClicked.emit(projectId);
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }
}
