import React from 'react'
import axios from 'axios'
// Context is made up of two things
// Provider - Single as close to top level as possible
// Consumer - Multiple have multiple consumers
export const GalleryContext = React.createContext()

export class GalleryProvider extends React.Component {
  state = {
    term: '',
    images: [],
    status: 'initial'
  }

  fetchImages = async term => {
    this.setState({
      status: 'searching',
      term: term,
      images: []
    })

    try {
      const response = await axios.get(
        'https://api.unsplash.com/search/photos',
        {
          params: {
            client_id:
              '4e8192761d7e5bc4aad3f7446d530fc3953ad5999528f05adad67a60e76a9b4c',
            query: term
          }
        }
      )
      this.setState({
        status: 'done',
        images: response.data.results
      })
    } catch (error) {
      this.setState({
        status: 'error'
      })
    }
  }

  render() {
    return (
      <GalleryContext.Provider
        value={{
          ...this.state,
          fetchImages: this.fetchImages
        }}
      >
        {this.props.children}
      </GalleryContext.Provider>
    )
  }
}
