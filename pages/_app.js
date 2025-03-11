import '../styles/globals.css'

import React from 'react'

function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default App;