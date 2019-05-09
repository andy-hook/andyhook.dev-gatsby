import { ISocialMeta, IProjects } from "@custom-types/model"
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

export const projectsData: IProjects = {
  bright: {
    label: "Bright",
    desc: "Bright description",
    path: "/bright",
  },
  brandwatch: {
    label: "Brandwatch",
    desc: "Brandwatch description",
    path: "/brandwatch",
  },
  monster: {
    label: "Monster",
    desc: "Monster description",
    path: "/monster",
  },
  jamieson: {
    label: "Jamieson",
    desc: "Jamieson description",
    path: "/jamieson",
  },
  sketchbook: {
    label: "Sketchbook",
    desc: "Sketchbook description",
    path: "/sketchbook",
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
