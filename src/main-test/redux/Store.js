
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from "./feature/feature-counter"

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
