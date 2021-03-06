import React from 'react'
import { graphql } from 'gatsby'

import Header from '../components/header'
import GlobalStyles from '../elements/GlobalStyles'
import Meta from '../elements/meta'
import PageStyles from '../elements/pageStyle'
import HomeFirstSection from '../components/homeFirstSection'
import HomeSecondSection from '../components/homeSecondSection'
import HomeThirdSection from '../components/homeThirdSection'

const IndexPage = ({data}) => {
  return (
    <>
      <GlobalStyles />
      <PageStyles>
        <Meta pageName="home" />

        <Header data={data} />
        
        <HomeFirstSection data={data} />
        <HomeSecondSection data={data} />
        <HomeThirdSection data={data} />
      </PageStyles>
    </>
  )
}

export default IndexPage;

export const query = graphql`
query {
  logo: file(relativePath: { eq: "20it-logo.png" }) {
    childImageSharp {
      fixed(width: 100, height: 40) {
        ...GatsbyImageSharpFixed
      }
    }
  },
  firstPicture: file(relativePath: { eq: "Picture (2).png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  },
  arbotena: file(relativePath: { eq: "arbotena.png" }) {
    childImageSharp {
      fixed(width: 100, height: 24) {
        ...GatsbyImageSharpFixed
      }
    }
  },
  foodplace: file(relativePath: { eq: "Foodplace.png" }) {
    childImageSharp {
      fixed(width: 60, height: 46) {
        ...GatsbyImageSharpFixed
      }
    }
  },
  procuratio: file(relativePath: { eq: "Procuratio.png" }) {
    childImageSharp {
      fixed(width: 100, height: 24) {
        ...GatsbyImageSharpFixed
      }
    }
  },
  whitechart: file(relativePath: { eq: "Whitechart.png" }) {
    childImageSharp {
      fixed(width: 110, height: 24) {
        ...GatsbyImageSharpFixed
      }
    }
  },
  document: file(relativePath: { eq: "Picture (3).png" }) {
    childImageSharp {
      fixed(width: 400, height: 250) {
        ...GatsbyImageSharpFixed
      }
    }
  },
  screen: file(relativePath: { eq: "Picture - New Way.png" }) {
    childImageSharp {
      fixed(width: 550, height: 400) {
        ...GatsbyImageSharpFixed
      }
    }
  },
  threeDOne: file(relativePath: { eq: "3D- 1.png" }) {
    childImageSharp {
      fixed(width: 400, height: 375) {
        ...GatsbyImageSharpFixed
      }
    }
  },
  threeDTwo: file(relativePath: { eq: "3D- 2.png" }) {
    childImageSharp {
      fixed(width: 400, height: 550) {
        ...GatsbyImageSharpFixed
      }
    }
  },
  threeDThree: file(relativePath: { eq: "3D- 3.png" }) {
    childImageSharp {
      fixed(width: 400, height: 375) {
        ...GatsbyImageSharpFixed
      }
    }
  },
  threeDFour: file(relativePath: { eq: "3D- 4.png" }) {
    childImageSharp {
      fixed(width: 400, height: 375) {
        ...GatsbyImageSharpFixed
      }
    }
  },
  threeDFive: file(relativePath: { eq: "3D- 5.png" }) {
    childImageSharp {
      fixed(width: 400, height: 375) {
        ...GatsbyImageSharpFixed
      }
    }
  },
  
}
`
