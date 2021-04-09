import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome Earthling!</h1>
    <p>Download a sample of our Preview Report below.</p>
    <p>We hope to hear from you soon!</p>
    <iframe src="https://show.zohopublic.com.au/publish/6pp63e11ec77477ca49c99265062598b11691" height="213" width="314" name="Sample%20Preview%20Report" scrolling=no frameBorder="0" style="border:1px solid #AABBCC" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
