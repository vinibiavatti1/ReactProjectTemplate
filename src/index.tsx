import React from 'react'
import ReactDOM from 'react-dom/client'
import WebVitalsService from './services/WebVitalsService'
import App from './components/main/app/App'
import EnvService from './services/EnvService'
import EnvEnum from './enums/EnvEnum'
import setup from './setup'
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
const env = EnvService.getEnv()
if (env != EnvEnum.PRODUCTION) {
    console.log(`App running in environment: ${env}`)
    WebVitalsService.reportWebVitals(console.log)
}
