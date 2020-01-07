import React from 'react'
import {Link} from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"

const AboutPage = () => (
    <Layout>
    <SEO title="About" />
    <h1>About Page</h1>
    <ul>
    <li>
        <Link to="/">Inicio</Link>
      </li>
      <li>
        <Link to="/about" activeStyle={{color:'#007acc'}}>About</Link>
      </li>
    </ul>
    </Layout>
)

export default AboutPage