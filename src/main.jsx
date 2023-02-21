import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './reset.css'
import './index.css'

import { Provider } from 'react-redux'

import { store } from './app/store'
import { fetchAdvice } from './features/Advice/adviceSlice'

store.dispatch(fetchAdvice())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
