import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import AboutHero from "./about-hero"

const AboutHeroContainer: React.FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "about/hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return <AboutHero imageObject={data.image.childImageSharp.fluid} />
}

export default AboutHeroContainer
