import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

const AppStyles = styled.div`
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'header header header'
    'main   main   main  ';
`

const ContentWrapper = styled.div`
  grid-area: main;
`

const Layout = ({ children }) => (
  <AppStyles>
    <ContentWrapper>{children}</ContentWrapper>
  </AppStyles>
)

// Layout.propTypes = {}

export default Layout
