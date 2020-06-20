import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container } from "react-bootstrap"
import styled from "styled-components"

const Example = styled.div`
  margin: auto;
  width: 100px;
  height: 100px;
  background: ${props => props.theme.primary};
`

const Header = ({ siteTitle }) => (
  <header>
    <Example />
    <Container>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
