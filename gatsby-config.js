module.exports = {
  siteMetadata: {
    title: `Andy Hook – High performance user interfaces"`,
    description: `Andy Hook is a Brighton based developer specialising in UI engineering`,
    author: `@Andy_Hook`,
    email: `hello@andyhook.dev`,
    defaultTwitterImage: `/images/social/twitter-preview.png`,
    defaultOgImage: `/images/social/og-preview.png`,
    social: {
      instagram: {
        label: "Instagram",
        url: "https://www.instagram.com/andyhooky",
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
        url: "https://www.linkedin.com/in/andrew-hook",
        icon: "linkedin",
      },
    },
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
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
        name: `andyhook.dev`,
        short_name: `andyhook`,
        start_url: `/`,
        background_color: `#0D0D0F`,
        theme_color: `#651BC7`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },

    // Typekit font loading
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: `dfp8ggi`,
        },
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
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        globPatterns: ["**/*.{js,svg,html,css}"],
      },
    },

    // Netlify integration and redirects
    `gatsby-plugin-netlify`,
  ],
}
