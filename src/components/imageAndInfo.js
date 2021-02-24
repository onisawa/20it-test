import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import TitleAndDescription from './titleAndDescription'

const Container = styled.div`
  display: flex;
  flex: 1;
`

const ContentContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 0.5;
  justify-content: center;
`

const ImageAndInfo = ({ fixed, title = 'title', description = 'description' }) => {
    return (
        <Container>
          <ContentContainer>
            <Img fixed={fixed} />
          </ContentContainer>
          <ContentContainer>
              <TitleAndDescription 
                title={title}
                description={description}
              />
          </ContentContainer>
        </Container>
    )
  }

export default ImageAndInfo