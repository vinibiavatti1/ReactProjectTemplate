import { render, screen } from '@testing-library/react'
import { Suspense } from 'react'

/**
 * Render test.
 */
test('renders component', () => {
    render(<Suspense />)
    const textElement = screen.getByText('Loading...')
    expect(textElement).toBeInTheDocument()
})
