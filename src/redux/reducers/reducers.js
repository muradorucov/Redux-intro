export const Reducers = (state = [], action) => {
  switch (action.type) {
    case 'add_customer':
      return [...state, action.payload]
    case 'remove_customer':
      return state.filter((todo) => todo.id !== action.payload.id)
    case 'empty_customer':
      return []
    default:
      return state
  }
}
