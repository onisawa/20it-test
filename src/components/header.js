import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import NavLink from '../elements/navLink'
import GradientButton from '../elements/gradientButton'
import { Link } from 'gatsby'
import { lg } from '../constant'

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
    padding: 20px 90px;
`

const MenuContainer = styled.div`
    @media (max-width: ${lg}) { 
        display: none;
    }
`

const RightContainer = styled.div`
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: flex-end;
    padding: 10px 90px;
`

const ButtonContainer = styled.div`
    @media (max-width: ${lg}) { 
        display: none;
    }
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
                <Link to='/'><Img fixed={data.logo.childImageSharp.fixed} /></Link>
                <MenuContainer>
                    {menu.map(({name, to}) => (<NavLink key={name} to={to}>{name}</NavLink>))}
                </MenuContainer>
            </LeftContainer>
            <RightContainer>
            <ButtonContainer>
                <GradientButton>CALL BACK</GradientButton>
            </ButtonContainer>
            </RightContainer>
        </Container>
    )
  }

export default Header