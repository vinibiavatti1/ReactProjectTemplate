import './Suspense.css'

/**
 * React suspense component.
 * @returns React element.
 */
export default function Suspense(): JSX.Element {
    return (
        <>
            <div className='loading'>
                Loading...
            </div>
        </>
    )
}
