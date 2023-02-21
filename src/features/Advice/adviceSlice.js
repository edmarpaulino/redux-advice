import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const ADVICE_URL = 'https://api.adviceslip.com/advice'
const initialState = {
  content: '',
  status: 'idle',
  error: null,
}

export const fetchAdvice = createAsyncThunk('advice/fetchAdvice', async () => {
  const response = await axios.get(ADVICE_URL)
  return response.data
})

const adviceSlice = createSlice({
  name: 'advice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAdvice.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchAdvice.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.content = action.payload.slip.advice
      })
      .addCase(fetchAdvice.rejected, (state, action) => {
        state.status = 'failure'
        state.error = action.error.message
      })
  },
})

export const selectAdvice = (state) => state.advice.content
export const selectAdviceStatus = (state) => state.advice.status
export const selectAdviceError = (state) => state.advice.error

export default adviceSlice.reducer
