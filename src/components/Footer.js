import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-icons" />
        <p>&copy;{new Date().getFullYear()} MDXBlog. All rights reserved</p>
        <hr />
        <p>by Franck Binde, FullStack Developer</p>
      </div>
    </footer>
  )
}

export default Footer
