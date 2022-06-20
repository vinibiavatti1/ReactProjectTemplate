import Constants from '../../../constants/Constants'
import './Home.css'

/**
 * Component props.
 */
type HomeProps = {
    title: string
    language: string,
    children?: React.ReactNode
}

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
                <div>Environment: {Constants.ENVIRONMENT}</div>
                <div>Locale: {props.language}</div>
            </div>
        </>
    )
}
