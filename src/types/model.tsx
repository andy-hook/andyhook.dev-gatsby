import { TIcons } from "@custom-types/icons"

export interface ISocialMetaItem {
  label: string
  url: string
  icon: TIcons
}

export interface ISocialMeta {
  [key: string]: ISocialMetaItem
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
}

export interface IProjects {
  [key: string]: IProjectItem
  bright: IProjectItem
  brandwatch: IProjectItem
  monster: IProjectItem
  jamieson: IProjectItem
  sketchbook: IProjectItem
}

export interface IProjectsData {
  siteMetadata: {
    projects: IProjects
  }
}
