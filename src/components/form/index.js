import React from 'react'
import { GalleryContext } from '../../contexts/galleryContext'
import Form from './form'

export default props => (
  <GalleryContext.Consumer>
    {({ fetchImages }) => (
      <Form {...props} fetchImages={fetchImages} />
    )}
  </GalleryContext.Consumer>
)
