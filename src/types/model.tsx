import { TIcons } from "@custom-types/icons"

export interface ISocialMetaItem {
  label: string
  url: string
  icon: TIcons
}

export interface ISocialMeta {
  email: ISocialMetaItem
  dribbble: ISocialMetaItem
  twitter: ISocialMetaItem
  instagram: ISocialMetaItem
  linkedin: ISocialMetaItem
  github: ISocialMetaItem
}

export interface ISocialMetaData {
  siteMetadata: {
    social: ISocialMeta
  }
}

export interface IMeta {
  title: string
  description: string
  author: string
  email: string
  defaultTwitterImage: string
  defaultOgImage: string
  social: ISocialMeta
}

export interface IMetaData {
  siteMetadata: IMeta
}

export interface IProjectContentsItem {
  label: string
  key: string
}

export type TProjectContents = IProjectContentsItem[]

export interface IProjectDetails {
  role: string
  location: string
  date: string
}

export interface IProjectItem {
  label: string
  desc: string
  path: string
  details: IProjectDetails
  contents: TProjectContents
}

export type TProjectNames =
  | "bright"
  | "brandwatch"
  | "monster"
  | "jamieson"
  | "sketchbook"

export type TProjects = { [key in TProjectNames]: IProjectItem }

export interface IProjectsData {
  siteMetadata: {
    projects: TProjects
  }
}
