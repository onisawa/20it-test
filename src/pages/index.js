import React from 'react'

import Header from '../components/header'
import GlobalStyles from '../elements/GlobalStyles'
import Meta from '../elements/meta'
import PageStyles from '../elements/pageStyle'

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <PageStyles>
        <Meta pageName="home" />

        <Header />
      </PageStyles>
    </>
  )
}

export default IndexPage;
