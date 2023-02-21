import { configureStore } from '@reduxjs/toolkit'

import adviceReducer from '../features/Advice/adviceSlice'

export const store = configureStore({
  reducer: { advice: adviceReducer },
})
