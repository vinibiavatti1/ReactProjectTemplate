import { Routes, Route } from 'react-router-dom'
import Home from '../../modules/home/Home'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Main from '../main/Main'
import './Layout.css'

/**
 * React layout component.
 * @returns
 */
export default function Layout(): JSX.Element {
    return (
        <>
            <Header></Header>
            <Main>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Main>
            <Footer></Footer>
        </>
    )
}
