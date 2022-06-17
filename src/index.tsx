import React from 'react'
import ReactDOM from 'react-dom/client'
import WebVitalsService from './services/WebVitalsService'
import App from './components/main/app/App'
import './index.css'

const ROOT_ELEMENT_ID = 'root'

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

// Web vitals for measuring the real life performance of the app.
WebVitalsService.reportWebVitals(console.log)
