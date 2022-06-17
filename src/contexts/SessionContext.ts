import React from 'react'

/**
 * Session context to store user data
 */
const SessionContext = React.createContext({
    user: null,
    mail: null,
})

export default SessionContext
