import React from 'react'
import styled from 'styled-components'
import NavLink from '../elements/navLink'

const Container = styled.main`

`

const Header = () => {
    return (
        <Container>
            <NavLink to='/case-studies'>Erfolgsgeschichten</NavLink>
            <NavLink to='#'>Team</NavLink>
            <NavLink to='#'>Blog</NavLink>
        </Container>
    )
  }

export default Header
