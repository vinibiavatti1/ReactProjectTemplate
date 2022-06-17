import StringUtils from '../utils/StringUtils'
import LocaleEnum from '../enums/LocaleEnum'
import { readFileSync } from 'fs'

const DEFAULT_MESSAGE_BUNDLE_KEY = 'default'

/**
 * Internationalization message bundles.
 * Note that it uses arrow function to be lazy load for performance.
 */
const i18nMessageBundles: { [key: string]: () => object } = {
    default: () => readFileSync('../i18n/en_us.json').toJSON(),
    en_us: () => readFileSync('../i18n/en_us.json').toJSON(),
    pt_pt: () => readFileSync('../i18n/pt_pt.json').toJSON(),
}

/**
 * Cached bundle.
 */
let currentBundle = {}

/**
 * Load the message bundle to memory by local storage locale.
 */
export function loadI18nMessageBundle(): void {
    let locale = localStorage.getItem(LocaleEnum.LOCAL_STORAGE_LOCALE_KEY)
    if (!locale || !(locale in i18nMessageBundles)) {
        locale = DEFAULT_MESSAGE_BUNDLE_KEY
    }
    currentBundle = i18nMessageBundles[locale]()
}

/**
 * Get current i18n message file bundle checking local storage key.
 * @returns message bundle object.
 */
export function getI18nMessageBundle(): object {
    if (!currentBundle) {
        loadI18nMessageBundle()
    }
    return currentBundle
}

/**
 * Reset cached message bundle to force reload.
 */
export function resetI18nMessageBundle(): void {
    currentBundle = {}
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
 * @param messagePath path to the message in the bundle like: node.subnode.message.
 * @returns string message in the bundle.
 */
export default function i18n(messagePath: string, ...args: string[]): string {
    const i18nMessageBundle = getI18nMessageBundle()
    const keys = messagePath.split('.')
    let node: any = i18nMessageBundle // eslint-disable-line
    let message: string = messagePath
    keys.forEach((key) => {
        if (!(key in node)) {
            node = null
            return
        } else {
            node = node[key]
        }
    })
    if (node && typeof node == 'string') {
        message = node
    }
    return StringUtils.format(message, ...args)
}
