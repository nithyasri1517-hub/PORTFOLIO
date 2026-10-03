export interface PageAsset {
  src: string;
  width: number;
  height: number;
}

export interface CaseStudyItem {
  id: string;
  order: number;
  title: string;
  concept: string;
  image: string;
  tag: string;
}

export interface SavoirSection {
  id: string;
  order: number;
  title: string;
  subtitle: string;
  description: string;
  pages: PageAsset[];
}

export interface ExperimentalProject {
  id: string;
  title: string;
  subtitle: string;
  concept: string;
  pages: PageAsset[];
}

export interface SocialMediaProject {
  id: string;
  name: string;
  displayName: string;
  category: string;
  description: string;
  iconPages: PageAsset[];
  workPages: PageAsset[];
}

export interface ProjectCardMeta {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tag: string;
  route: string;
  coverImage: string;
  pageCount: number;
  description: string;
}
