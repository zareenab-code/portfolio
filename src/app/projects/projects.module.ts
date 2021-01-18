import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';

import { ProjectsComponent } from './projects.component';
import { ProjectListModule } from './project-list/project-list.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ProjectListModule,
    FlexLayoutModule,
  ],
})
export class ProjectsModule {}
