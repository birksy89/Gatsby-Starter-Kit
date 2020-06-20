import React from "react"
import { Container } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
      <Container>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Container>
    </footer>
  )
}

export default Footer
