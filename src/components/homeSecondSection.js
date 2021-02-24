import React from 'react'
import styled from 'styled-components'
import { SECOND_BACKGROUND_COLOR } from '../constant'
import TitleAndDescription from './titleAndDescription'

const Container = styled.div`
  background-color: ${SECOND_BACKGROUND_COLOR};
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 180px 90px;
`

const HomeSecondSection = ({ data }) => {
    return (
        <Container>
            <TitleAndDescription 
              title="Den Wandel"
              description='Es wird immer deutlicher: Die Ära "Das haben wir immer schon so gemacht" ist vorbei. Erfolgreiche Digitalisierung verlangt aber Viel mehr als ein neues CMS-System, einen zeitgemäßen Onlineshop Oder Mobile-Apps mit blinkenden Funktionen.'
            />

            <TitleAndDescription 
              title="endlich meistern"
              description="Gemeinsam erarbeiten wir die digitale Erfolgsstrategie für eure Zukunft. Wir können programmieren, designen und testen. Doch Viel wichtiger, wir können euch für Digitalisierung begeistern. Die Mehrwerte der neuen Normalität liegen nicht immer sofort auf der Hand und hier kommen wir als Experten ins Spiel."
            />
        </Container>
    )
  }

export default HomeSecondSection