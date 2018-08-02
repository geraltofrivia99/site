
const InitialState = {
  offset: 0
}

export const scroll = (state = InitialState, action) => {
  switch(action.type) {
    case 'SCROLLING':
      return {
        ...state, offset: action.payload
      }
      case 'LOGO_EVENT':
        console.log('REDUCERS WORKS')
        return state
    default: 
      return state
  }
}