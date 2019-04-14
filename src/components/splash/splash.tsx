import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Social from "../social/social"

interface Data {
  allSocialJson: {
    edges: object[]
  }
}

const Splash: React.FunctionComponent = () => {
  const data: Data = useStaticQuery(graphql`
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

  console.log(data)

  return <Social />
}

export default Splash
