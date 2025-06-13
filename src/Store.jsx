import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../src/features/counterslice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})