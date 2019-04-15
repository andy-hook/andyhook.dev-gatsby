import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

import { SocialData } from "../types"

import Icon from "../components/icon/icon"
import Image from "../components/image"
import SEO from "../components/seo"
import Splash from "../components/splash/splash"
import Social from "../components/social/social"

const IndexPage: React.FunctionComponent = () => {
  const data: SocialData = useStaticQuery(graphql`
    query {
      allSocialJson {
        edges {
          node {
            label
            url
          }
        }
      }
    }
  `)

  return (
    <>
      <Social items={data.allSocialJson.edges} />
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Splash />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Icon name="twitter" />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </>
  )
}

export default IndexPage
