import React from 'react';
import { graphql } from 'gatsby'

import Meta from '../elements/meta';
import Header from '../components/header';
import PageStyles from '../elements/pageStyle';
import GlobalStyles from '../elements/GlobalStyles';

const CaseStudies = ({data}) => {
  return (
    <>
      <GlobalStyles />
      <PageStyles>
        <Meta pageName="Erfolgsgeschichten" />

        <Header data={data} />
      </PageStyles>
    </>
  )
}

export default CaseStudies;

export const query = graphql`
query {
  logo: file(relativePath: { eq: "20it-logo.png" }) {
    childImageSharp {
      fixed(width: 100, height: 40) {
        ...GatsbyImageSharpFixed
      }
    }
  },
}
`

