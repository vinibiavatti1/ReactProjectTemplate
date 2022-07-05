import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import 'assets/styles/base.scss'
import './App.scss'

/**
 * React App Component.
 * @returns React element.
 */
export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
