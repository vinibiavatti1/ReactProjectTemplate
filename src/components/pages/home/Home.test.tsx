import { render, screen } from '@testing-library/react'
import Home from './Home'

/**
 * Render test.
 */
test('renders component', () => {
    render(<Home title="App running successfully!" />)
    const textElement = screen.getByText('App running successfully!')
    expect(textElement).toBeInTheDocument()
})
