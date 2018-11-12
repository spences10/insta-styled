import React from 'react'
import { GalleryContext } from '../../contexts/galleryContext'
import styled from 'styled-components'

import Image from './image'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: fit-content(1000px) 250px 250px;
`

export default props => (
  <GalleryContext.Consumer>
    {({ images }) => (
      <Wrapper>
        {images.map(image => (
          <Image {...props} image={image} key={image.id} />
        ))}
      </Wrapper>
    )}
  </GalleryContext.Consumer>
)
