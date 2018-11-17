import React from 'react'
import Form from './form'
import Images from './images'
import Status from './status'
import Layout from './layout'
import FilterSelect from './filterSelect'

import { GlobalStyle } from './theme/globalStyle'

export default class App extends React.Component {
  componentWillMount() {
    this.props.fetchImages('Dogs')
  }

  render() {
    return (
      <Layout>
        <GlobalStyle />
        <Form />
        <FilterSelect />
        <Status />
        <Images />
      </Layout>
    )
  }
}
