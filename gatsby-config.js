const path = require("path")

const email = `hello@andy-hook.co.uk`

module.exports = {
  siteMetadata: {
    title: `Andy Hook – Fast, scalable, beautiful user interfaces`,
    description: `Andy Hook is a Brighton based web developer and digital designer specialising in high-performance UI engineering`,
    author: `@Andy_Hook`,
    email: email,
    defaultTwitterImage: `/images/social/twitter-preview.png`,
    defaultOgImage: `/images/social/og-preview.png`,
    social: {
      email: {
        label: "Email",
        url: `mailto:${email}`,
        icon: "mail",
      },
      instagram: {
        label: "Instagram",
        url: "https://www.instagram.com/andyhooky/",
        icon: "instagram",
      },
      twitter: {
        label: "Twitter",
        url: "https://twitter.com/andy_hook",
        icon: "twitter",
      },
      dribbble: {
        label: "Dribbble",
        url: "https://dribbble.com/andyhook",
        icon: "dribbble",
      },
      github: {
        label: "Github",
        url: "https://github.com/andy-hook",
        icon: "github",
      },
      linkedin: {
        label: "Linkedin",
        url: "https://www.linkedin.com/in/andyahook",
        icon: "linkedin",
      },
    },
    projects: {
      bright: {
        label: "Bright",
        desc: "Bright description",
        images: "bright",
        path: "/projects/bright",
        details: {
          role: "Interface Developer",
          location: "Brighton, UK",
          date: "2018 – Present",
        },
      },
      brandwatch: {
        label: "Brandwatch",
        desc: "Social listening trusted by world-leading brands",
        images: "brandwatch",
        path: "/projects/brandwatch",
        details: {
          role: "Senior Developer",
          location: "Brighton, UK",
          date: "2016 – 2018",
        },
      },
      monster: {
        label: "Monster",
        desc: "Monster description",
        images: "monster",
        path: "/projects/monster",
        details: {
          role: "Senior Developer",
          location: "Brighton, UK",
          date: "2016",
        },
      },
      cymbiosis: {
        label: "Cymbiosis",
        desc: "Cymbiosis description",
        images: "cymbiosis",
        path: "/projects/cymbiosis",
        details: {
          role: "Front-End Designer",
          location: "Hastings, UK",
          date: "2014 – 2016",
        },
      },
      jamieson: {
        label: "Jamieson",
        desc: "Jamieson description",
        images: "jamieson",
        path: "/projects/jamieson",
        details: {
          role: "Front-End Designer",
          location: "Hastings, UK",
          date: "2014 – 2016",
        },
      },
      experiments: {
        label: "Experiments",
        desc: "Experiments description",
        images: "experiments",
        path: "/projects/experiments",
        details: {
          role: "Digital Designer",
          location: "Brighton, UK",
          date: "2016 – Present",
        },
      },
    },
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `andyhook.design`,
        short_name: `andyhook`,
        start_url: `/`,
        background_color: `#0D0D0F`,
        theme_color: `#651BC7`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },

    // Per route transition links
    // The persistent layout is defined here rather than being part of component composition in file
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/components/layout.tsx`),
      },
    },

    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@style": path.resolve(__dirname, "src/style"),
          "@data": path.resolve(__dirname, "src/data"),
          "@constants": path.resolve(__dirname, "src/constants"),
          "@components": path.resolve(__dirname, "src/components"),
          "@store": path.resolve(__dirname, "src/store"),
          "@custom-types": path.resolve(__dirname, "src/types"),
          "@images": path.resolve(__dirname, "src/images"),
          "@hooks": path.resolve(__dirname, "src/hooks"),
          "@utils": path.resolve(__dirname, "src/utils"),
        },
        extensions: [],
      },
    },

    // Import SVG as react components
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `${__dirname}/src/images/svg-import`,
        },
      },
    },

    // Google Analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-22526711-4",
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     globPatterns: ["**/*.{js,svg,html,css}"],
    //   },
    // },

    // Temporarily disable service worker for local dev
    `gatsby-plugin-remove-serviceworker`,

    // Netlify integration and redirects
    `gatsby-plugin-netlify`,
  ],
}
