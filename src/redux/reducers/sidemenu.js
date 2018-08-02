const InitialState = {
  open: 'CLOSE',
  theme: ''
}

export const sidemenu = (state=InitialState, action) => {
  switch(action.type) {
    case 'OPEN_SIDE_MENU':
      return {
        ...state, open: 'OPEN'
      }
    case 'CLOSE_SIDE_MENU':
      return {
        ...state, open: 'CLOSE'
      }
    case 'INITIAL_SIDE_MENU':
      return {
        ...state, open: 'INITIAL'
      }
    default: 
      return state
  }
}