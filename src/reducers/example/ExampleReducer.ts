import ReducerErrors from '../../errors/ReducerErrors'
import GenericReducerActionModel from '../../models/GenericReducerActionModel'
import ExampleReducerActions from './ExampleReducerActions'

/**
 * Reducer Impl. Example.
 * @param state state object.
 * @param action action object with payload.
 */
function appReducer(state: object, action: GenericReducerActionModel): object {
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
