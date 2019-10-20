import { ISocialMeta, TProjects } from "@custom-types/model"
import { ItransitionState } from "@custom-types/gatsby-plugin-transition-link"
import { FluidObject } from "gatsby-image"

export const socialIcons: ISocialMeta = {
  email: {
    label: "Email",
    url: "email address",
    icon: "mail",
  },
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

export const projectsData: TProjects = {
  bright: {
    label: "Bright",
    desc: "Bright description",
    images: "bright",
    path: "/projects/bright",
    details: {
      role: "role",
      location: "location",
      date: "date",
    },
    contents: [
      {
        label: "section1",
        key: "section1",
      },
    ],
  },
  brandwatch: {
    label: "Brandwatch",
    desc: "Brandwatch description",
    images: "brandwatch",
    path: "/projects/brandwatch",
    details: {
      role: "role",
      location: "location",
      date: "date",
    },
    contents: [
      {
        label: "section1",
        key: "section1",
      },
    ],
  },
  monster: {
    label: "Monster",
    desc: "Monster description",
    images: "monster",
    path: "/projects/monster",
    details: {
      role: "role",
      location: "location",
      date: "date",
    },
    contents: [
      {
        label: "section1",
        key: "section1",
      },
    ],
  },
  jamieson: {
    label: "Jamieson",
    desc: "Jamieson description",
    images: "jamieson",
    path: "/projects/jamieson",
    details: {
      role: "role",
      location: "location",
      date: "date",
    },
    contents: [
      {
        label: "section1",
        key: "section1",
      },
    ],
  },
  sketchbook: {
    label: "Sketchbook",
    desc: "Sketchbook description",
    images: "sketchbook",
    path: "/projects/sketchbook",
    details: {
      role: "role",
      location: "location",
      date: "date",
    },
    contents: [
      {
        label: "section1",
        key: "section1",
      },
    ],
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

export const fluidImageObject: FluidObject = {
  aspectRatio: 1.5,
  sizes: "(max-width: 1000px) 100vw, 1000px",
  src: "/static/4a7de89fcee5d7cd97c940895602fbe0/2f7e7/cover-image.jpg",
  srcSet:
    "/static/4a7de89fcee5d7cd97c940895602fbe0/4d406/cover-image.jpg 250w,↵/static/4a7de89fcee5d7cd97c940895602fbe0/32ee9/cover-image.jpg 500w,↵/static/4a7de89fcee5d7cd97c940895602fbe0/2f7e7/cover-image.jpg",
}
