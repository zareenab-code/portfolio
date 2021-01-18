import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';

import { ProjectListComponent } from './project-list.component';
import { ProjectListItemComponent } from './project-list-item/project-list-item.component';
import { ProjectComponent } from '../project/project.component';

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectListItemComponent,
    ProjectComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatGridListModule,
  ],
  exports: [ProjectListComponent, ProjectListItemComponent],
  entryComponents: [ProjectComponent],
})
export class ProjectListModule {}
