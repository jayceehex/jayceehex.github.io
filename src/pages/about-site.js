import React from "react"
import { Helmet } from "react-helmet"
import "../styles/styles.css"
import Layout from "../components/layout"

const AboutSitePage = ({ location }) => (
  <>
    <Helmet>
      <title>About this site | jayceehex.github.io</title>
    </Helmet>
    <Layout
      location={location}
    >
      <p>
        This site is built using{" "}
        <a
          href="https://github.com/gatsbyjs/gatsby"
          target="_blank"
          title="Gatsby"
          rel="noreferrer"
        >
          Gatsby
        </a>
        . The icons are served by{" "}
        <a
          href="https://github.com/react-icons/react-icons"
          target="_blank"
          title="react-icons"
          rel="noreferrer"
        >
          react-icons
        </a>
        . Everything is styled using{" "}
        <a
          href="https://sass-lang.com/"
          target="_blank"
          title="Sass"
          rel="noreferrer"
        >
          Sass
        </a>
        .
      </p>
    </Layout>
  </>
)

export default AboutSitePage
