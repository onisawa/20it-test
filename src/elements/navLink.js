import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { DEFAULT_FONT_COLOR, INACTIVE_FONT_COLOR } from '../constant'

const CustomLink = styled(Link)`
  color: ${INACTIVE_FONT_COLOR};
  margin-left: 30px;
  text-decoration: none;

  &.active {
    color: ${DEFAULT_FONT_COLOR};
  }
`

const NavLink = ({to = '#', children = 'name'}) => {
    return (
      <CustomLink to={to} activeClassName="active">{children}</CustomLink>
    )
  }

export default NavLink
