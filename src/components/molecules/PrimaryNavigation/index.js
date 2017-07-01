import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Link } from 'components'

const Nav = styled.nav`
  display: flex;
  list-style: none;
  > :not(:first-child) {
    margin-left: 1rem;
  }
  a {
    font-weight: 300;
    color: ${palette('grayscale', 5)};
    font-size: 1.25rem;
    &.active {
      color: ${palette('grayscale', 5)};
    }
  }
`

const PrimaryNavigation = (props) => {
  return (
    <Nav {...props}>
      <li><Link to="/home" exact activeClassName="active">Home</Link></li>
      <li><Link to="/about" activeClassName="active">About</Link></li>
      <li><Link to="/posts" activeClassName="active">Posts</Link></li>
      <li><Link to="/message" activeClassName="active">Message</Link></li>
    </Nav>
  )
}

PrimaryNavigation.propTypes = {
  reverse: PropTypes.bool,
}

export default PrimaryNavigation
