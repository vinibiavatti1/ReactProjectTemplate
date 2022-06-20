import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/home/Home'
import { useTranslation } from 'react-i18next'
import './Layout.css'

/**
 * React layout component.
 * @returns
 */
export default function Layout(): JSX.Element {
    const [t, i18n] = useTranslation()
    return (
        <>
            <header></header>
            <main>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                title={t('general.app.message')}
                                language={i18n.language}
                            />
                        }
                    />
                </Routes>
            </main>
            <footer></footer>
        </>
    )
}
