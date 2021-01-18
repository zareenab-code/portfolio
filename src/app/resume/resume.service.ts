import { Injectable } from '@angular/core';

import { BasicInfo, Experience, Skills, ResumeDetails } from './resume.model';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  basicInfo: BasicInfo = {
    name: 'ZAREENA BEGUM BASHA',
    title: 'FULL STACK APPLICATION DEVELOPER',
    email: 'zareenabasha2@gmail.com',
    mobileNo: '9686485020',
  };
  experience: Experience[] = [
    {
      company: 'Chromosis Technologies Pvt Ltd',
      designation: 'Application Developer',
      duration: 'From March 2019 to Present(1 year 10 months )',
    },
    {
      company: 'TecoBytes Solutions Pvt. Ltd',
      designation: 'Application Developer',
      duration: 'From July 2017 to October 2018 (1 year 4 months )',
    },
  ];

  skills: Skills = {
    languages: 'PHP, HTML, CSS, JavaScript, JQuery, TypeScript',
    frameworks: 'Bootstrap, Laravel, Codeigniter, Angular, Vue.js, Ionic',
    databases: 'MY SQL, MongoDB',
  };

  constructor() {}

  getBasicInfo() {
    return { ...this.basicInfo };
  }

  getResumeDetails() {
    const resumeDetails: ResumeDetails = {
      basicInfo: { ...this.basicInfo },
      experience: this.experience.slice(),
      skills: { ...this.skills },
    };
    return resumeDetails;
  }
}
