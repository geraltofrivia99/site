import _ from 'lodash';

const InitialState = {
  byId: _.keyBy([{id: 1, title: 'First Section', active: false},{id: 2, title: 'Second Section', active: false},{id: 3, title: 'Third Section', active: false},{id: 4, title: 'Forth Section', active: false}], 'id'),
  list: [{id: 1, title: 'First Section', active: false},{id: 2, title: 'Second Section', active: false},{id: 3, title: 'Third Section', active: false},{id: 4, title: 'Forth Section', active: false}]
}
  

export const sections = (state = InitialState, action) => {
  switch(action.type) {
    case 'CHECK_SECTION':
      const fake = state.list
      const edit = fake.slice()
      edit.forEach(e => {
        if (e.id === action.payload) {
          e.active = !e.active;
          return;
        } 
      });
      return {
        ...state, list: edit
      }
    default: 
      return state
  }
}