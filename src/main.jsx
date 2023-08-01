import React from 'react'
import ReactDOM from 'react-dom/client'
import { StyleSheetManager } from 'styled-components'
import { ErrorBoundary } from 'react-error-boundary'
import App from './App.jsx'
import ErrorFallback from './ui/ErrorFallback.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace('/')}
    >
      {/* Fix styled-components warning https://github.com/styled-components/styled-components/issues/4049 */}
      <StyleSheetManager shouldForwardProp={() => true}>
        <App />
      </StyleSheetManager>
    </ErrorBoundary>
  </React.StrictMode>
)
