import { ISocialMeta } from "@custom-types/model"
import { ItransitionState } from "@custom-types/gatsby-plugin-transition-link"

export const socialIcons: ISocialMeta = {
  twitter: {
    label: "Twitter",
    url: "path/to/social/profile",
    icon: "twitter",
  },
  instagram: {
    label: "Instagram",
    url: "path/to/social/profile",
    icon: "instagram",
  },
  linkedin: {
    label: "Linkedin",
    url: "path/to/social/profile",
    icon: "linkedin",
  },
  dribbble: {
    label: "Dribbble",
    url: "path/to/social/profile",
    icon: "dribbble",
  },
  github: {
    label: "Github",
    url: "path/to/social/profile",
    icon: "github",
  },
}

export const transitionState: ItransitionState = {
  transitionStatus: "entering",
  current: {
    delay: 0,
    length: 0,
    state: {},
  },
  entry: {
    delay: 0,
    length: 0,
    state: {},
  },
  exit: {
    delay: 0,
    length: 0,
    state: {},
  },
  mount: true,
}
