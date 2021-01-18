import { Component, OnInit } from '@angular/core';

import { ResumeService } from './resume.service';
import { BasicInfo, Experience, Skills, ResumeDetails } from './resume.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  basicInfo: BasicInfo | undefined;
  experience: Experience[] = [];
  skills: Skills | undefined;

  constructor(private _resumeService: ResumeService) {}

  ngOnInit(): void {
    this.getResumeDetails();
  }

  getResumeDetails() {
    const resumeDetails: ResumeDetails = this._resumeService.getResumeDetails();
    this.basicInfo = resumeDetails.basicInfo;
    this.experience = resumeDetails.experience;
    this.skills = resumeDetails.skills;
  }
}
