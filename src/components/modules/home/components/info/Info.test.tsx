import { render, screen } from '@testing-library/react'
import Info from './Info'

/**
 * Render test.
 */
test('renders component', () => {
    render(<Info language="en" />)
    const textElement = screen.getByText('en')
    expect(textElement).toBeInTheDocument()
})
