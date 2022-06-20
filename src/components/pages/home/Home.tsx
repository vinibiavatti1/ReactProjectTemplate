import Constants from '../../../constants/Constants'
import HomeProps from './HomeProps'
import { getCurrentLocale } from '../../../services/I18nService'
import './Home.css'

/**
 * React Home Component.
 * @param props Component properties.
 * @returns React element.
 */
export default function Home(props: HomeProps): JSX.Element {
    return (
        <>
            <div className="text-center">
                <h1>{props.title}</h1>
                <div>Env: {Constants.ENVIRONMENT}</div>
                <div>Locale: {getCurrentLocale()}</div>
            </div>
        </>
    )
}
