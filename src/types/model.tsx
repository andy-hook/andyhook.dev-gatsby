export interface SocialMetaItem {
  label: "dribbble" | "instagram" | "linkedin" | "twitter" | "github"
  url: string
}

export interface SocialMeta {
  [key: string]: SocialMetaItem
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

export interface MetaData {
  title: string
  description: string
  author: string
  email: string
  defaultTwitterImage: string
  defaultOgImage: string
  social: SocialMeta
}

export interface MetaDataQuery {
  siteMetadata: MetaData
}
