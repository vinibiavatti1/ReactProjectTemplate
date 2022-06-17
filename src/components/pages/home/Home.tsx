import React from 'react'
import EnvConstants from '../../../constants/EnvConstants'
import { getCurrentLocale } from '../../../services/I18nService'
import HomeProps from './HomeProps'
import './Home.css'

/**
 * React Home Component.
 * @param props Component properties.
 * @returns React element.
 */
export default function Home(props: HomeProps) {
    return (
        <>
            <div className="text-center">
                <h1>{props.title}</h1>
                <div>Env: {EnvConstants.environment}</div>
                <div>Locale: {getCurrentLocale()}</div>
            </div>
        </>
    )
}
