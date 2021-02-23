import React from 'react'
import { Helmet } from 'react-helmet'
import favicon from '../images/favicon-32x32.png'

const Meta = ({pageName = 'pageName'}) => {
    return (
      <Helmet>
        <title>{pageName} | 20it</title>
        <link rel="icon" type="image/png" href={favicon} />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </Helmet>
    )
  }

export default Meta
