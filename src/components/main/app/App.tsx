import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'
import './App.css'

/**
 * React App Component.
 * @param props Component properties.
 * @returns React element.
 */
export default function App() {
    return (
        <>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </>
    )
}
