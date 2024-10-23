export interface BaseCardProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  imageSrc: string;
  metrics: { [key: string]: string };
}

export interface ExperienceCardProps extends BaseCardProps {
  period: string;
  links: {
    company?: string;
    github?: string;
  };
}

export interface ProjectCardProps extends BaseCardProps {
  links: {
    github?: string;
    live?: string;
  };
}

export type CardProps = ExperienceCardProps | ProjectCardProps;
