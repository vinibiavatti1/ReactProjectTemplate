import React from 'react'
import ReactDOM from 'react-dom/client'
import WebVitalsService from './services/WebVitalsService'
import App from './components/main/app/App'
import EnvEnum from './enums/EnvEnum'
import setup from './setup'
import Constants from './constants/Constants'
import './index.css'

const ROOT_ELEMENT_ID = 'root'

// Setup application.
setup()

// Create React root element.
const root = ReactDOM.createRoot(
    document.getElementById(ROOT_ELEMENT_ID) as HTMLElement
)

// Render React element tree.
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// Print Web vitals and environment when not production
if (Constants.ENVIRONMENT != EnvEnum.PRODUCTION) {
    console.log(`App running in environment: ${Constants.ENVIRONMENT}`)
    WebVitalsService.reportWebVitals(console.log)
}
