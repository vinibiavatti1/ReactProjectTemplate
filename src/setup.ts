import { init as initI18nService } from './services/I18nService'

/**
 * Setup application by initializing the required resources.
 */
export default function setup(): void {
    initI18nService()
}
