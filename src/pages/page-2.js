import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Welcome Earthling!</h1>
    <p>Download a sample of our Preview Report below.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
