import React from "react"
import { FaTwitter, FaGithub, FaItchIo } from "react-icons/fa"
import FooterLink from "./footer-link"

const footerLinks = [
  {
    title: "Twitter",
    href: "https://www.twitter.com/jayceehex",
    icon: <FaTwitter />,
  },
  {
    title: "Github",
    href: "https://www.github.com/jayceehex",
    icon: <FaGithub />,
  },
  {
    title: "ItchIo",
    href: "https://jayceeha.itch.io",
    icon: <FaItchIo />,
  },
]

const Footer = () => (
  <footer
    className="h-32 bg-slate-900 dark:bg-white text-white dark:text-slate-900"
    id="footer"
  >
    <div className="flex flex-row justify-around mx-8 my-4">
      {footerLinks.map((link, key) => (
        <FooterLink
          title={link.title}
          href={link.href}
          icon={link.icon}
          key={key}
        />
      ))}
    </div>
  </footer>
)

export default Footer
