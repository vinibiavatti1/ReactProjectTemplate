import React from 'react'

/**
 * App context to store application data
 */
const AppContext = React.createContext({
  user: null,
  mail: null,
})

export default AppContext
