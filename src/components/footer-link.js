import React from "react"

const FooterLink = ({ title, href, icon }) => (
  <a
    href={href}
    title={title}
    target="_blank"
    className="footer__icon"
    rel="noreferrer"
  >
    {icon}
  </a>
)

export default FooterLink
