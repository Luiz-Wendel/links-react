import { LINK_CREATE } from '../actions/linkActions'

const initialState = {
  link: null
}

export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case LINK_CREATE: {
      const response = payload ? payload.data : null
      const link = response ? response.data : null

      return { ...state, link }
    }
    default: {
      return state
    }
  }
}
