import { LINK_GET, LINK_LIST, LINK_CREATE, LINK_UPDATE, LINK_TO_REMOVE } from '../actions/linkActions'

const initialState = {
  link: null,
  links: []
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case LINK_GET: {
      const response = payload ? payload.data : null
      const link = response ? response.data : null

      return { ...state, link }
    }

    case LINK_LIST: {
      const response = payload ? payload.data : null
      const links = response ? response.data : null

      return { ...state, links }
    }

    case LINK_CREATE: {
      const response = payload ? payload.data : null
      const link = response ? response.data : null

      return { ...state, link }
    }

    case LINK_UPDATE: {
      const response = payload ? payload.data : null
      const link = response ? response.data : null

      return { ...state, link }
    }

    case LINK_TO_REMOVE: {
      return { ...state, linkToRemove: payload }
    }

    default: {
      return state
    }
  }
}
