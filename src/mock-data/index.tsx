import { ISocialMeta, TProjects } from "@custom-types/model"
import { ItransitionState } from "@custom-types/gatsby-plugin-transition-link"

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
