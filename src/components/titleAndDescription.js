import React from 'react'
import styled from 'styled-components'
import { DEFAULT_FONT_COLOR, FIRST_GRADIENT_COLOR, SECOND_GRADIENT_COLOR } from '../constant'

const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 0.6;
  flex-direction: column;
  justify-content: center;
  margin: 100px 0;
`

const Header = styled.p`
  color: ${DEFAULT_FONT_COLOR};
  font-size: 48px;
  font-weight: 600;
  margin: 0;
`

const Description = styled.p`
  color: ${DEFAULT_FONT_COLOR};
  font-size: 18px;
  margin: 0;
`

const Separator = styled.p`
  background: linear-gradient(90deg, ${SECOND_GRADIENT_COLOR} 30%, ${FIRST_GRADIENT_COLOR} 100%);
  height: 5px;
  width: 100px;
  margin: 20px 0;
`

const TitleAndDescription = ({ title = 'title', description = 'description' }) => {
    return (
        <Container>
            <Header>{title}</Header>
            <Separator />
            <Description>{description}</Description>
        </Container>
    )
  }

export default TitleAndDescription