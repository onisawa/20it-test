import React from 'react'
import { Helmet } from 'react-helmet'
import favicon from '../images/favicon-32x32.png'

const Meta = ({pageName = 'pageName'}) => {
    return (
      <Helmet>
        <title>{pageName} | 20it</title>
        <link rel="icon" type="image/png" href={favicon} />
      </Helmet>
    )
  }

export default Meta
