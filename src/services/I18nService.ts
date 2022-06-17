import StringUtils from '../utils/StringUtils'
import LocaleEnum from '../enums/LocaleEnum'
import EnvService from './EnvService'
import EnvEnum from '../enums/EnvEnum'
import AppError from '../errors/AppError'
import JsonUtils from '../utils/JSONUtils'

const DEFAULT_MESSAGE_BUNDLE_KEY: string = 'en_us'

/**
 * Internationalization message bundles.
 * Note that it uses arrow function to be lazy load for performance.
 */
const i18nMessageBundles: { [key: string]: () => object } = {
    en_us: () => require('../i18n/en_us.json'),
    pt_pt: () => require('../i18n/pt_pt.json'),
}

/**
 * Cached bundle.
 */
let currentBundle: null | object = null
let currentLocale: null | string = null

/**
 * Initialize module by loading message bundle to memory.
 */
export function init(): void {
    loadI18nMessageBundle()
}

/**
 * Force reload module data.
 */
export function reset(): void {
    init()
}

/**
 * Load the message bundle to memory by local storage locale.
 */
export function loadI18nMessageBundle(): void {
    let locale = localStorage.getItem(LocaleEnum.LOCAL_STORAGE_LOCALE_KEY)
    if (!locale || !(locale in i18nMessageBundles)) {
        locale = DEFAULT_MESSAGE_BUNDLE_KEY
    }
    currentBundle = i18nMessageBundles[locale]()
    currentLocale = locale
    if (EnvService.getEnv() != EnvEnum.PRODUCTION) {
        console.log(`Message bundle loaded for locale: ${locale}`)
    }
}

/**
 * Get current i18n message file bundle checking local storage key.
 * @returns message bundle object.
 */
export function getCurrentMessageBundle(): object | null {
    return currentBundle
}

/**
 * Get current locale.
 * @returns string locale.
 */
export function getCurrentLocale(): string | null {
    return currentLocale
}

/**
 * Reset cached message bundle to force reload.
 * @returns object of message bundles
 */
export function getI18nMessageBundles(): { [key: string]: () => object } {
    return i18nMessageBundles
}

/**
 * Get message from i18n translate file.
 * @param query path to the message in the bundle like: node.subnode.message.
 * @returns string message in the bundle. If the query was not resolved, return the query itself.
 */
export default function i18n(query: string, ...args: string[]): string {
    const i18nMessageBundle = getCurrentMessageBundle()
    if (i18nMessageBundle === null) {
        throw new AppError(
            'To use I18nService resources, please, initialize the module using init() first'
        )
    }
    const message = JsonUtils.findByQueryString(query, i18nMessageBundle)
    if (message && typeof message == 'string') {
        return StringUtils.format(message, ...args)
    }
    return query
}
