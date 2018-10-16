const initialState = {}

const reducer  = (state = initialState, action) => {
  switch(action.type) {
    case 'INC_COUNTER':
      return {
        counter: state.counter + 1
      }
    case 'DEC_COUNTER':
      return {
        counter: state.counter -1
      }
    default: 
      return state
  }
}

export default reducer