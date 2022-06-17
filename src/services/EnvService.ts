import EnvEnum from '../enums/EnvEnum'

/**
 * Get application environment.
 * Default is development.
 * @returns the current environment name ("development" | "production" | "test").
 */
function getEnv(): string {
    const env = process.env.NODE_ENV
    if (!env || !(env in EnvEnum)) {
        return EnvEnum.DEVELOPMENT
    }
    return env
}

export default {
    getEnv,
}
