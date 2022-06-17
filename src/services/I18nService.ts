import StringUtils from '../utils/StringUtils'
import LocaleEnum from '../enums/LocaleEnum'
import { readFileSync } from 'fs'

/**
 * Internationalization bundles.
 * Note that it uses arrow function to be lazy load for performance.
 */
const i18nBundles: { [key: string]: () => object } = {
    default: () => readFileSync('../i18n/en_us.json').toJSON(),
    en_us: () => readFileSync('../i18n/en_us.json').toJSON(),
    pt_pt: () => readFileSync('../i18n/pt_pt.json').toJSON(),
}

/**
 * Get current i18n message file bundle checking local storage key.
 * @returns message bundle object.
 */
function getI18nMessageBundle(): object {
    const locale = localStorage.getItem(LocaleEnum.LOCAL_STORAGE_LOCALE_KEY)
    if (locale && locale in i18nBundles) {
        const bundle = i18nBundles[locale]
        return bundle()
    }
    return i18nBundles.default()
}

/**
 * Get message from i18n translate file.
 * @param messagePath path to the message in the bundle like: node.subnode.message.
 * @returns string message in the bundle.
 */
function i18n(messagePath: string, ...args: string[]): string {
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

export default i18n
