import AppError from './AppError'

/**
 * Reducer error base class.
 */
class ReducerError extends AppError {
  constructor(msg: string) {
    super(msg)
  }
}

/**
 * Reducer error for when the action type is invalid.
 */
class ReducerInvalidActionTypeError extends ReducerError {
  constructor(actionType: string, reducerName: string) {
    super(`Invalid action type: ${actionType} for ${reducerName} reducer.`)
  }
}

export default {
  ReducerError,
  ReducerInvalidActionTypeError,
}
