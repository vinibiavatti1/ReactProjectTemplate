import { render, screen } from '@testing-library/react'
import CustomButton from './CustomButton'

/**
 * Render test.
 */
test('renders component', () => {
    render(<CustomButton />)
    const textElement = screen.getByText('Hello World!')
    expect(textElement).toBeInTheDocument()
})
