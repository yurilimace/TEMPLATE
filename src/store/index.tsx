import { createStore } from 'redux'

const initialState = {
  sidebarShow: 'responsive'
}

type Action = { type: string }

function changeState (state = initialState, { type, ...rest }: Action) {
  switch (type) {
    case 'set':
      return {...state, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
