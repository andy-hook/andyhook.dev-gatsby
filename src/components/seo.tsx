/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Helmet from "react-helmet"

interface Props {
  description?: string
  lang?: string
  keywords?: string[]
  title?: string
  twitterImage?: string
  ogImage?: string
}

const SEO = ({
  description = ``,
  lang = `en`,
  keywords = [],
  title,
  twitterImage = ``,
  ogImage = ``,
}: Props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            defaultTwitterImage
            defaultOgImage
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaTwitterImage = twitterImage || site.siteMetadata.defaultTwitterImage
  const metaOgImage = ogImage || site.siteMetadata.defaultOgImage

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      defaultTitle={`${site.siteMetadata.title}`}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: metaOgImage,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image:src`,
          content: metaTwitterImage,
        },
      ].concat(
        keywords.length > 0
          ? {
              name: `keywords`,
              content: keywords.join(`, `),
            }
          : []
      )}
    />
  )
}

export default SEO
