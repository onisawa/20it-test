import React from 'react'
import styled from 'styled-components'
import { DEFAULT_FONT_COLOR, FIRST_GRADIENT_COLOR, SECOND_GRADIENT_COLOR, THIRD_GRADIENT_COLOR } from '../constant'

const CustomButton = styled.a`
  background: linear-gradient(90deg, ${FIRST_GRADIENT_COLOR} 0%, ${SECOND_GRADIENT_COLOR} 70%, ${THIRD_GRADIENT_COLOR} 100%);
  border-radius: 5px;
  color: ${DEFAULT_FONT_COLOR};
  font-size: 16px;
  font-weight: 600;
  padding: 15px 30px;
  text-align: center;
  width: ${({width}) => width};

  &:hover {
    cursor: pointer;
  }
`

const GradientButton = ({width = 'auto', children = 'name'}) => {
    return (
      <CustomButton width={width}>{children}</CustomButton>
    )
  }

export default GradientButton
