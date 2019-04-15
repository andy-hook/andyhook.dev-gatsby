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
