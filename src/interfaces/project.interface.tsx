export interface Project {
  id: number;
  name: string;
  description: string;
  smallImage: string;
  bigImage: string;
}

export interface ProjectCardProps {
  project: Project;
  type: number;
}
