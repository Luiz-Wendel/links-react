import { getAccount, setAccount, removeAccount, setToken, removeToken, setRefreshToken, removeRefreshToken } from '../helpers/account'
import { SIGN_IN, SIGN_UP, SIGN_OUT, INIT_ACCOUNT, REFRESH_TOKEN } from '../actions/accountActions'

const initialState = {
  account: null
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case SIGN_IN:
    case SIGN_UP:
      const response = payload ? payload.data : null
      const account = response ? response.data : null
      const metadata = response ? response.metadata : null

      const token = metadata ? metadata.jwtToken : null
      const refreshToken = metadata ? metadata.jwtRefreshToken : null

      if (account)
        setAccount(account)

      if (token)
        setToken(token)

      if (refreshToken)
        setRefreshToken(refreshToken)

      return { ...state, account }

    case SIGN_OUT:
      removeAccount()
      removeToken()
      removeRefreshToken()

      return { ...state, account: null }

    case INIT_ACCOUNT: {
      const account = getAccount()

      return { ...state, account }
    }

    case REFRESH_TOKEN: {
      const response = payload ? payload.data : null
      const metadata = response ? response.metadata : null
      const token = metadata ? metadata.token : null

      if (token)
        setToken(token)

      return state
    }

    default:
      return state
  }
}
