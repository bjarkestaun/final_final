import {Map, List} from 'immutable'

const initial = Map({
  presentation: Map({
    gid: undefined,
    index: 0,
    code: undefined
  })
})

export default function counter(state = initial, action) {
  switch (action.type) {
  case 'SET_INDEX':
    return state.setIn(['presentation', 'index'], action.payload);
  case 'SET_CODE':
    return state.setIn(['presentation', 'code'], action.payload);
  default:
    return state;
  }
}
