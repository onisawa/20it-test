import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import NavLink from '../elements/navLink'
import GradientButton from '../elements/gradientButton'

const Container = styled.main`
    display: flex;
    position: absolute;
    width: 100%;
    z-index: 5;
`

const LeftContainer = styled.div`
    align-items: center;
    display: flex;
    flex: 0.6;
    padding: 20px 60px;
`

const RightContainer = styled.div`
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: flex-end;
    padding: 10px 60px;
`

const menu = [
    {name: 'Erfolgsgeschichten', to: '/case-studies'},
    {name: 'Team', to: '#'},
    {name: 'Blog', to: '#'},

]

const Header = ({ data }) => {
    return (
        <Container>
            <LeftContainer>
                <NavLink to='/'><Img fixed={data.logo.childImageSharp.fixed} /></NavLink>
                {menu.map(({name, to}) => (<NavLink to={to}>{name}</NavLink>))}
            </LeftContainer>
            <RightContainer>
                <GradientButton>CALL BACK</GradientButton>
            </RightContainer>
        </Container>
    )
  }

export default Header