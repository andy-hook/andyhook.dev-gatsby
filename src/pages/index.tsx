import { Link } from "gatsby"
import React from "react"

import Icon from "../components/icon/icon"
import Image from "../components/image"
import Layout from "../components/layout"
import MyComponent from "../components/my-component/my-component"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Icon name="twitter" />
    <MyComponent />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
