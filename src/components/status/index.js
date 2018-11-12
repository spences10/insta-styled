import React from 'react'
import { GalleryContext } from '../../contexts/galleryContext'
import Status from './status'

export default props => (
  <GalleryContext.Consumer>
    {({ status, term, images }) => (
      <Status
        {...props}
        status={status}
        term={term}
        numImages={images.length}
      />
    )}
  </GalleryContext.Consumer>
)
