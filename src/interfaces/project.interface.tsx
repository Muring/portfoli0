export interface SimpleProject {
  id: number;
  name: string;
  description: string;
  smallImage: string;
  bigImage: string;
}

export interface ProjectCardProps {
  project: SimpleProject;
  type: number;
}

export interface DetailProject {
  name: string;
  date: string;
  memberCount: number;
  summary: string;
  link: string;
  projectDescription: string;
  designDescription: string;
  myRole: string;
  skills: string;
  difficulties: string;
}
