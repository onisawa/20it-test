import React from 'react'
import { graphql } from 'gatsby'

import Header from '../components/header'
import GlobalStyles from '../elements/GlobalStyles'
import Meta from '../elements/meta'
import PageStyles from '../elements/pageStyle'
import HomeFirstSection from '../components/homeFirstSection'

const IndexPage = ({data}) => {
  return (
    <>
      <GlobalStyles />
      <PageStyles>
        <Meta pageName="home" />

        <Header data={data} />
        
        <HomeFirstSection data={data} />
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
      fixed(width: 700, height: 700) {
        ...GatsbyImageSharpFixed
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
  }
}
`
