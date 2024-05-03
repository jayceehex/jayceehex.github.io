import React from "react"
import { Helmet } from "react-helmet"
import BodyText from "../components/bodytext"
import { TextHighlight } from "../components/texthighlight"
import Layout from "../components/layout"

const IndexPage = ({ location }) => (
  <>
    <Helmet>
      <title>jayceehex.github.io</title>
    </Helmet>
    <Layout location={location}>
      <BodyText>
        <p>
          <TextHighlight>Hello there!</TextHighlight> I'm a JavaScript
          developer from the West Country. I've got experience in React and
          Angular frameworks, and I'm trying to get better at functional
          programming. CSS styling is my favourite coding hobby, especially when
          it comes to accessibility. Outside of code, I read too many books and
          don't get enough vitamin D.
        </p>
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
      </BodyText>
    </Layout>
  </>
)

export default IndexPage
