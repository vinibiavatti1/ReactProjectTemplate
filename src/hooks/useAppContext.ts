import { useContext } from 'react'
import AppContext from '../contexts/AppContext'

/**
 * Application context hook.
 * @returns context object.
 */
export default function useAppContext(): object {
  return useContext(AppContext)
}
