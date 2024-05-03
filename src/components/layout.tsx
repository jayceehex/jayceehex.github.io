/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import MainNav from "./main-nav"
import FrontPageHeader from "./front-page-header"

const Layout = ({ location, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
          navLinks {
            name
            link
          }
        }
      }
    }
  `)

  const siteTitle = (
    path: string,
    author: string,
    navLinks: Array<any>,
  ): string =>
    path === "/"
      ? author
      : navLinks.find(navLink => navLink.link == path)?.name || ``

  return (
    <div id="top-container" className="flex flex-col justify-between h-screen bg-white dark:bg-slate-900 dark:text-white">
      {location.pathname === "/" ? 
        <FrontPageHeader /> : 
        <Header
          siteTitle={siteTitle(
            location.pathname,
            data.site.siteMetadata?.author || ``,
            data.site.siteMetadata?.navLinks || [],
          )}
        />}
      <main id="page-content" className="mx-8">{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
