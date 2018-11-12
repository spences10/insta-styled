import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import * as serviceWorker from './serviceWorker'

import {
  GalleryProvider,
  GalleryContext
} from './contexts/galleryContext'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <GalleryProvider>
    <GalleryContext.Consumer>
      {({ fetchImages }) => <App fetchImages={fetchImages} />}
    </GalleryContext.Consumer>
  </GalleryProvider>,
  rootElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
