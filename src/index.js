import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './styles/main.scss'

import App from './App'
import store from './store'
import TokenRefresher from './components/TokenRefresher'

ReactDOM.render(
  <Provider store={store}>
    <TokenRefresher />
    <App />
  </Provider>,
  document.getElementById('root')
)
