import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

// Your top level component
import App from './App'

// import 'dnb-ui-lib/src/style'
import 'dnb-ui-lib/style/basis'
import 'dnb-ui-lib/style/components'
import 'dnb-ui-lib/style/themes/ui'

import EufemiaProvider from 'dnb-ui-lib/shared/Provider'

// This polyfill is only needed if we use Styled Components (CSS-in-JS) syntax
import cssVars from 'css-vars-ponyfill'
cssVars()

// Export your top level component as JSX (for static rendering)
export default App

// Render your app
if (typeof document !== 'undefined') {
  const target = document.getElementById('root')

  const renderMethod = target.hasChildNodes()
    ? ReactDOM.hydrate
    : ReactDOM.render

  const render = Comp => {
    renderMethod(
      <AppContainer>
        <EufemiaProvider formRow={{}}>
          <Comp />
        </EufemiaProvider>
      </AppContainer>,
      target
    )
  }

  // Render!
  render(App)

  // Hot Module Replacement
  if (module && module.hot) {
    module.hot.accept('./App', () => {
      render(App)
    })
  }
}
