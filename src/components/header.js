import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import NavLink from '../elements/navLink'

const Container = styled.main`
    position: absolute;
    padding: 20px 80px;
`

const LeftContainer = styled.div`
    display: flex;
    flex: 0.6;
    align-items: center;
`

const Header = ({ data }) => {
    return (
        <Container>
            <LeftContainer>
                <NavLink to='/'><Img fixed={data.file.childImageSharp.fixed} /></NavLink>
                <NavLink to='/case-studies'>Erfolgsgeschichten</NavLink>
                <NavLink to='#'>Team</NavLink>
                <NavLink to='#'>Blog</NavLink>
            </LeftContainer>
        </Container>
    )
  }

export default Header