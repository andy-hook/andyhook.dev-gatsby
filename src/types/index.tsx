export interface SocialItem {
  node: {
    label: string
    url: string
  }
}

export interface SocialData {
  allSocialJson: {
    edges: SocialItem[]
  }
}

export interface SiteItems {
  node: {
    title: string
    description: string
    author: string
  }
}

export interface SiteData {
  allSiteJson: {
    edges: SiteItems[]
  }
}
