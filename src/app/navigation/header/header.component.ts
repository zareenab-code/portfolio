import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { ResumeService } from '../../resume/resume.service';
import { BasicInfo } from '../../resume/resume.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();

  name: string = '';

  constructor(private _resumeService: ResumeService) {}

  ngOnInit(): void {
    this.getBasicInfo();
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  getBasicInfo() {
    const basicInfo: BasicInfo = this._resumeService.getBasicInfo();
    this.name = basicInfo.name;
  }
}
