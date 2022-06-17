import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/home/Home'
import i18n from '../../../services/I18nService'
import './Layout.css'

/**
 * React layout component.
 * @returns
 */
export default function Layout() {
    return (
        <>
            <header></header>
            <main>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home title={i18n('generalMessages.appMessage')} />
                        }
                    />
                </Routes>
            </main>
            <footer></footer>
        </>
    )
}