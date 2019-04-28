export interface ISocialMetaItem {
  label: "dribbble" | "instagram" | "linkedin" | "twitter" | "github"
  url: string
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
