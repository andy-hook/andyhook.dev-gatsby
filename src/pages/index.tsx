import { Link } from "gatsby"
import React from "react"

import Icon from "../components/icon/icon"
import Image from "../components/image"
import MyComponent from "../components/my-component/my-component"
import SEO from "../components/seo"
import Splash from "../components/splash/splash"

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Splash />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Icon name="twitter" />
    <MyComponent />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default IndexPage
