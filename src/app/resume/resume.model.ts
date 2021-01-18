export interface BasicInfo {
  name: string;
  title: string;
  email: string;
  mobileNo: string;
}

export interface Experience {
  company: string;
  designation: string;
  duration: string;
}

export interface Skills {
  languages: string;
  frameworks: string;
  databases: string;
}

export interface ResumeDetails {
  basicInfo: BasicInfo;
  experience: Experience[];
  skills: Skills;
}
