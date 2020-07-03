import { useEffect } from 'react'
import { connect } from 'react-redux'

import { getToken } from '../../helpers/account'
import { getTokenExpire } from '../../helpers/jwt'
import { getFreshToken } from '../../actions/accountActions'

const TokenRefresher = ({ getFreshToken }) => {
  const TRESHOLD = 15

  const calculate = () => {
    const token = getToken()

    const expires = getTokenExpire(token)

    const secondsToExpire = expires - (Date.now() / 1000)

    return secondsToExpire
  }

  useEffect(() => {
    // Get seconds to expire minus 15s
    const secondsToExpire = calculate() - TRESHOLD

    // Refresh token 15s before token expiration
    const refreshToken = setTimeout(getFreshToken, secondsToExpire * 1000)

    return () => clearTimeout(refreshToken)
  }, [getFreshToken])

  return null
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, { getFreshToken })(TokenRefresher)
