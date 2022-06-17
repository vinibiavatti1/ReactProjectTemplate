import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

/**
 * Render test.
 */
test('renders component', () => {
    render(<App />)
    const textElement = screen.getByText('App running successfully!')
    expect(textElement).toBeInTheDocument()
})
