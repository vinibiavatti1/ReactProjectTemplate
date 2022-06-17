// Current environment
const ENVIRONMENT = process.env.REACT_APP_ENV

// Backend Base URL
const BACKEND_BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL

// Backend Endpoints
const BACKEND_ENDPOINTS = {
    auth: {
        login: '/login',
        logout: '/logout',
    }
}

export default {
    ENVIRONMENT,
    BACKEND_BASE_URL,
    BACKEND_ENDPOINTS,
}
