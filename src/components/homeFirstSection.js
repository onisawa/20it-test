import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { BACKGROUND_COLOR, DEFAULT_FONT_COLOR } from '../constant'
import GradientButton from '../elements/gradientButton'

const Container = styled.div`
  background-color: ${BACKGROUND_COLOR};
  display: flex;
  flex: 1;
`

const ContentContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 20px 90px;
  padding-top: 66px;
`

const Header = styled.p`
  color: ${DEFAULT_FONT_COLOR};
  font-size: 48px;
  font-weight: 600;
  margin: 4px 0;
`

const Description = styled.p`
  color: ${DEFAULT_FONT_COLOR};
  font-size: 18px;
  margin: 4px 0;
  margin-bottom: 24px;
`

const Subtitle = styled.p`
  color: ${DEFAULT_FONT_COLOR};
  font-size: 14px;
  margin: 4px 0;
  margin-bottom: 24px;
  margin-top: 68px;
`

const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const Icon = styled(Img)`
  margin-right: 30px;
`

const ImageContainer = styled.div`
  width: 40%;
  `



const HomeFirstSection = ({ data }) => {
  const icon = [
    {key: 'arbotena', fixed: data.arbotena.childImageSharp.fixed},
    {key: 'foodplace',fixed: data.foodplace.childImageSharp.fixed},
    {key: 'procuratio',fixed: data.procuratio.childImageSharp.fixed},
    {key: 'whitechart',fixed: data.whitechart.childImageSharp.fixed},

  ]
    return (
        <Container>
        <ContentContainer>
            <Header>Beyond IT</Header>
            <Description>Wir möchten euch bei euren digitalen Herausforderungen unterstützen. Als Techniker, als Berater und auch als Mentor.</Description>
            <GradientButton width="50%">CALL BACK</GradientButton>
            <Subtitle>uns vertrauen</Subtitle>
            <IconContainer>
                {icon.map(({fixed, key})=> (<Icon key={key} fixed={fixed} />))}
            </IconContainer>
        </ContentContainer>
          <ImageContainer>
            <Img style={{ height: "700px" }} fluid={data.firstPicture.childImageSharp.fluid} />
          </ImageContainer>
        </Container>
    )
  }

export default HomeFirstSection