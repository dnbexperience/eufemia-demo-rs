import React from 'react'
// import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { ProgressIndicator } from 'dnb-ui-lib/components'

const Wrapper = styled.div`
  pointer-events: none;
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;
`

const Preloader = () => {
  return (
    <Wrapper>
      <ProgressIndicator />
    </Wrapper>
  )
}

export default Preloader
