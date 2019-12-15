import { SocialMeta, Projects } from "@custom-types/model"
import { FluidObject } from "gatsby-image"

export const mockSocialIcons: SocialMeta = {
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

export const mockProjectsData: Projects = {
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
  },
  cymbiosis: {
    label: "Cymbiosis",
    desc: "Cymbiosis description",
    images: "cymbiosis",
    path: "/projects/cymbiosis",
    details: {
      role: "role",
      location: "location",
      date: "date",
    },
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
  },
  experiments: {
    label: "Experiments",
    desc: "Experiments description",
    images: "experiments",
    path: "/projects/experiments",
    details: {
      role: "role",
      location: "location",
      date: "date",
    },
  },
}

export const mockFluidImageObject: FluidObject = {
  aspectRatio: 1.5,
  sizes: "(max-width: 1000px) 100vw, 1000px",
  src: "/static/4a7de89fcee5d7cd97c940895602fbe0/2f7e7/cover-image.jpg",
  srcSet:
    "/static/4a7de89fcee5d7cd97c940895602fbe0/4d406/cover-image.jpg 250w,↵/static/4a7de89fcee5d7cd97c940895602fbe0/32ee9/cover-image.jpg 500w,↵/static/4a7de89fcee5d7cd97c940895602fbe0/2f7e7/cover-image.jpg",
}
