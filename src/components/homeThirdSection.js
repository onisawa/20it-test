import React from 'react'
import styled from 'styled-components'
import { BACKGROUND_COLOR } from '../constant'
import ImageAndInfo from './imageAndInfo'

const Container = styled.div`
  background-color: ${BACKGROUND_COLOR};
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 100px 90px;
`

const HomeThirdSection = ({ data }) => {
    const info = [
      {
        title: 'Von VC zu IT',
        description: '201T führt ein spannendes Doppelleben: unser Team startete als Venture Capital Unternehmen. Seit 2016 auf der Suche nach dem Unicorn, merkten wir schnell; Geld alleine führt nicht zum Erfolg. So investieren wir neben Kapital auch IT -Expertise. 0b Web- Oder App-Lösung, wir können technisch umsetzen, was die Start-ups brauchen.' ,
        fixed: data.document.childImageSharp.fixed,
        reverse: true
      },
      {
        title: 'IT-Mentorship',
        description: '2017 hat sich zum Ziel gesetzt, nicht ein weiterer IT-Dienstleister zu sein, sondern darüber hinaus die Auftraggeber mit unternehmerischem Denken zu unterstützen. Wir prüfen nicht nur die technische Machbarkeit eurer Projekte, sondern bringen uns mit umfangreicher Erfahrung als Mentor ein, denn wir möchten gemeinsam die bestmögliche Lösung finden.',
        fixed: data.screen.childImageSharp.fixed, 
      },
      {
        title: 'So arbeiten wir',
        description: 'Agile, lean, innovative - das sind auch unsere Ansprüche. Darüber hinaus agieren wir nach dem Prinzip von Design Thinking; bei uns steht von Anfang an immer die Zielgruppe im Mittelpunkt unserer Arbeit. Und unser Entrepreneurship-Spirit hilft, eure Ideen zu hinterfragen und immer das bestmögliche Ergebnis zu erzielen.' ,
        fixed: data.document.childImageSharp.fixed,
        reverse: true
      },
      {
        title: 'Kostenkontrolle',
        description: 'Nach Stunden abrechnen kann jeder. Klar, wir auch, am liebsten mit Budgetrahmen. Wir bieten aber auch Festpreise und erfolgsbasierte Zahlungsmöglichkeiten an. 100 Prozent flexibel. 100 Prozent transparent. So Sind alle zufrieden.',
        fixed: data.screen.childImageSharp.fixed, 
      },
      {
        title: 'Forschung & Entwicklung',
        description: 'Stillstand ist nicht unser Ding, deshalb Sind wir im ständigen Austausch mit Elite-Universitäten und Forschungseinrichtungen. So haben wir alle Trends im Blick. Egal 0b Blockchain, A1 Oder Smart Contract wir wissen wie wichtig neue Technologien Sind und vor allem, wann man sie einsetzen sollte.' ,
        fixed: data.document.childImageSharp.fixed,
        reverse: true
      },
    ]
    return (
        <Container>
          {info.map(({title, description, fixed, reverse}) => (
            <ImageAndInfo 
              title={title}
              description={description}
              fixed={fixed}
              reverse={reverse}
            />
          ))}
        </Container>
    )
  }

export default HomeThirdSection