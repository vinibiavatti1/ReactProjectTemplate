// I18n constants
const DEFAULT_LOCALE = 'en'

// Environment constants
const ENVIRONMENT = process.env.REACT_APP_ENV

// Backend constants
const BACKEND_BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL
const BACKEND_ENDPOINTS = {
  auth: {
    login: '/login',
    logout: '/logout',
  },
}

export default {
  DEFAULT_LOCALE,
  ENVIRONMENT,
  BACKEND_BASE_URL,
  BACKEND_ENDPOINTS,
}
