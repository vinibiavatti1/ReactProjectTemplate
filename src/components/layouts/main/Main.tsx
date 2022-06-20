import './Main.css'

/**
 * Component props.
 */
 type MainProps = {
    children?: React.ReactNode
}

/**
 * React main component.
 * @returns
 */
export default function Main(props: MainProps): JSX.Element {
    return (
        <>
            <main>{props.children}</main>
        </>
    )
}
