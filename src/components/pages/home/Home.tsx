import React from 'react'
import EnvConstants from '../../../constants/EnvConstants'
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
            <h1 className="text-center">{props.title}</h1>
            <h2>Env: {EnvConstants.environment}</h2>
        </>
    )
}
