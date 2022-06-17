import ReducerErrors from '../../errors/ReducerErrors'
import GenericReducerActionModel from '../../models/GenericReducerActionModel'
import ExampleReducerActions from './ExampleReducerActions'

/**
 * Reducer Impl. Example.
 * @param state
 * @param action
 */
function appReducer(state: object, action: GenericReducerActionModel) {
    switch (action.type) {
        case ExampleReducerActions.SOMETHING:
            return state
        default:
            throw new ReducerErrors.ReducerInvalidActionTypeError(
                action.type,
                appReducer.name
            )
    }
}

export default appReducer
