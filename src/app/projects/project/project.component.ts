import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Project } from '../project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public passedData: Project
  ) {}

  ngOnInit(): void {}
}
