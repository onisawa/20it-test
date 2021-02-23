import React from 'react'
import { graphql } from 'gatsby'

import Header from '../components/header'
import GlobalStyles from '../elements/GlobalStyles'
import Meta from '../elements/meta'
import PageStyles from '../elements/pageStyle'

const IndexPage = ({data}) => {
  return (
    <>
      <GlobalStyles />
      <PageStyles>
        <Meta pageName="home" />

        <Header data={data} />
      </PageStyles>
    </>
  )
}

export default IndexPage;

export const query = graphql`
query {
  file(relativePath: { eq: "20it-logo.png" }) {
    childImageSharp {
      fixed(width: 100, height: 40) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`
