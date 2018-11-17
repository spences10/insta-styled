import React from 'react'
import Form from './form'
import Images from './images'
import Status from './status'
import Layout from './layout'
import FilterSelect from './filterSelect'

export default class App extends React.Component {
  componentWillMount() {
    this.props.fetchImages('Mountains')
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Form />
          <FilterSelect />
          <Status />
          <Images />
        </Layout>
      </div>
    )
  }
}