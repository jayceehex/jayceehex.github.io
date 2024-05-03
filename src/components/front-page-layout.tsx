/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"
import MainNav from "./main-nav"
import FrontPageHeader from "./front-page-header"

const FrontPageLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query AuthorNavLinksQuery {
      site {
        siteMetadata {
          author
          navLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <div className={"container"}>
      <MainNav navLinks={data.site.siteMetadata?.navLinks || []} />
      <FrontPageHeader />
      <div className="content-box">
        <main id="main">{children}</main>
      </div>
      <Footer />
    </div>
  )
}

FrontPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FrontPageLayout
