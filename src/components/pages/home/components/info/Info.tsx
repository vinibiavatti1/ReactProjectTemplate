import Constants from 'constants/Constants'
import './Info.scss'

/**
 * Component props.
 */
type InfoProps = {
  language: string
  children?: React.ReactNode
}

/**
 * React Info Component.
 * @param props Component properties.
 * @returns React element.
 */
export default function Info(props: InfoProps): JSX.Element {
  return (
    <>
      <div>Environment: {Constants.ENVIRONMENT}</div>
      <div>Locale: {props.language}</div>
    </>
  )
}
