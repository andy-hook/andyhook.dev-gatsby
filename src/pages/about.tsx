import React from "react"

import SEO from "@components/seo"
import styled from "styled-components"

const AboutPage: React.FunctionComponent = () => {
  return (
    <>
      <SEO />
      <AboutWrapper>This is the root about page</AboutWrapper>
    </>
  )
}

const AboutWrapper = styled.div`
  background-color: green;

  height: 2000px;
`

export default AboutPage
