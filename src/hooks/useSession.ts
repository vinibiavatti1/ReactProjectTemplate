import { useContext } from 'react'
import SessionContext from '../contexts/SessionContext'

/**
 * Session context hook.
 * @returns session object.
 */
export default function useSession(): object {
    return useContext(SessionContext)
}
