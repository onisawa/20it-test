import React from 'react';
import Meta from '../elements/meta';
import Header from '../components/header';
import PageStyles from '../elements/pageStyle';
import GlobalStyles from '../elements/GlobalStyles';

const CaseStudies = () => {
  return (
    <>
      <GlobalStyles />
      <PageStyles>
        <Meta pageName="Erfolgsgeschichten" />

        <Header />
      </PageStyles>
    </>
  )
}

export default CaseStudies;
