import { render, screen } from '@testing-library/react'
import Home from './Home'

/**
 * Render test.
 */
test('renders component', () => {
    render(<Home />)
    const textElement = screen.getByText('App running successfully!')
    expect(textElement).toBeInTheDocument()
})
