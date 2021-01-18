import { Injectable } from '@angular/core';

import { Project } from './project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projects: Project[] = [
    {
      id: 1,
      name: 'Big Mishra',
      title: 'Inventory management application.',
      description:
        'This project has 5 modules namely, Main mishra, C&F Mishra, Sub C&F Mishra, Distributor and Retailer. This project manages Orders, Production, Barcode Generation, Billing and Dispatch of Big Mishra Business.',
      type: 'web',
      technologies: ['Laravel', 'MySql', 'Bootstrap', 'JQuery'],
      company: 'TecoBytes Solutions Pvt Ltd',
    },
    {
      id: 2,
      name: 'Rajendra',
      title: 'Inventory management application.',
      description:
        'This project manages sales, purchase and invice transactions according to the work flow process of Rajendra company.',
      type: 'web',
      technologies: ['Laravel', 'MySql', 'Bootstrap', 'JQuery'],
      company: 'TecoBytes Solutions Pvt Ltd',
    },
    {
      id: 3,
      name: 'Automach',
      title: 'Inventory management application.',
      description:
        'This project manages transactions like sales order, purchase order, dcinward, dcoutward, invice according to the workflow process of Automach company.',
      type: 'web',
      technologies: ['Laravel', 'MySql', 'Bootstrap', 'JQuery'],
      company: 'TecoBytes Solutions Pvt Ltd',
    },
    {
      id: 4,
      name: 'WBRetail',
      title: 'Inventory management application.',
      description:
        'This project manages invetory transactions for WBRetail company.',
      type: 'web',
      technologies: ['Laravel', 'MySql', 'Bootstrap', 'JQuery'],
      company: 'TecoBytes Solutions Pvt Ltd',
    },
    {
      id: 5,
      name: 'AVM Invento',
      title: 'Inventory management and CRM application.',
      description:
        'This project manages inventory transactions and customer relationship process for WBRetail company.',
      type: 'web',
      technologies: ['Laravel', 'MySql', 'Bootstrap', 'JQuery'],
      company: 'TecoBytes Solutions Pvt Ltd',
    },
    {
      id: 6,
      name: 'Piman',
      title: 'Construction management application.',
      description:
        'Project management system for a construction company, in which a super admin creates organization, one admin user and its projects. Each organization can then login and create users, import and manage activities. Activities are scheduled using forward pass and  backward pass technique. Activities are scheduled daily at midnight.',
      type: 'web',
      technologies: ['Laravel', 'MySql', 'Bootstrap', 'JQuery'],
      company: 'Chromosis Technologies Pvt Ltd',
    },
    {
      id: 7,
      name: 'Nammakshetra',
      title: 'Project management application.',
      description:
        'This project manages envents and complaints in particular area.',
      type: 'web',
      technologies: ['Laravel', 'MongoDB', 'Bootstrap', 'JQuery'],
      company: 'Chromosis Technologies Pvt Ltd',
    },
    {
      id: 8,
      name: 'R&D',
      title: 'Research & development management application.',
      description: 'Application for KLE for managing research and development.',
      type: 'web',
      technologies: ['Laravel', 'MySql', 'Bootstrap', 'JQuery'],
      company: 'Chromosis Technologies Pvt Ltd',
    },
    {
      id: 9,
      name: 'OM Fresh Foods',
      title: 'Food e-commerce website.',
      description:
        'This is a e-commerce application , which consists of front end(e-commerce website), backend (admin panel) and api modules.This project manages the e-commerce business process.',
      type: 'web',
      technologies: ['Laravel', 'MongoDB', 'Bootstrap', 'JQuery'],
      company: 'Chromosis Technologies Pvt Ltd',
    },
    {
      id: 10,
      name: 'Coupon site',
      title: 'Coupons and deals management application.',
      description:
        'Application for managing coupons and deals of various e-commerce website.',
      type: 'web',
      technologies: ['Laravel', 'MongoDB', 'Bootstrap', 'JQuery'],
      company: 'Chromosis Technologies Pvt Ltd',
    },
    {
      id: 11,
      name: 'Piman',
      title: 'Mobile app for managing construction activities.',
      description:
        'This is mobile application for Piman. From this application user can update daily progress , upload site images, comment on activity status,  update delay if any.',
      type: 'mobile',
      technologies: ['Ionic Framework', 'Angular', 'Cordova'],
      company: 'Chromosis Technologies Pvt Ltd',
    },
    {
      id: 12,
      name: 'Smart Campus',
      title: 'Smart campus portal for KLE.',
      description:
        'This project displays the current status of the components managed by artificial intelligence.',
      type: 'mobile',
      technologies: ['Ionic Framework', 'Angular', 'Cordova'],
      company: 'Chromosis Technologies Pvt Ltd',
    },
  ];
  constructor() {}

  getProjects() {
    return this.projects.slice();
  }

  getProject(projectId: number) {
    const project = this.projects.find((p) => p.id === projectId);
    return project;
  }
}
