import { BrowserRouter } from 'react-router-dom'
import Layout from './layouts/layout/Layout'
import './App.css'

/**
 * React App Component.
 * @returns React element.
 */
export default function App(): JSX.Element {
    return (
        <>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </>
    )
}
