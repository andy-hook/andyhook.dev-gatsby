export interface ISocialMetaItem {
  label: string
  url: string
  icon: string
}

export interface ISocialMeta {
  [key: string]: ISocialMetaItem
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

export interface IProject {
  label: string
  desc: string
  path: string
}

export interface IProjectData {
  siteMetadata: {
    projects: {
      bright: IProject
      brandwatch: IProject
      monster: IProject
      jamieson: IProject
      skechbook: IProject
    }
  }
}
