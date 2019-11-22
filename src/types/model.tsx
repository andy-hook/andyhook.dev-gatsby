import { TIcons } from "@custom-types/icons"

export interface SocialMetaItem {
  label: string
  url: string
  icon: TIcons
}

export interface SocialMeta {
  email: SocialMetaItem
  dribbble: SocialMetaItem
  twitter: SocialMetaItem
  instagram: SocialMetaItem
  linkedin: SocialMetaItem
  github: SocialMetaItem
}

export interface SocialMetaData {
  siteMetadata: {
    social: SocialMeta
  }
}

export interface Meta {
  title: string
  description: string
  author: string
  email: string
  defaultTwitterImage: string
  defaultOgImage: string
  social: SocialMeta
}

export interface MetaData {
  siteMetadata: Meta
}

export interface ProjectContentsItem {
  label: string
  key: string
}

export type ProjectContents = ProjectContentsItem[]

export interface ProjectDetails {
  role: string
  location: string
  date: string
}

export interface ProjectItem {
  label: string
  desc: string
  images: string
  path: string
  details: ProjectDetails
  contents: ProjectContents
}

export type ProjectNames =
  | "bright"
  | "brandwatch"
  | "monster"
  | "jamieson"
  | "sketchbook"

export type Projects = { [key in ProjectNames]: ProjectItem }

export interface ProjectsData {
  siteMetadata: {
    projects: Projects
  }
}
