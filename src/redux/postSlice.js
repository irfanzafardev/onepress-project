import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentPost: null,
  isloading: false,
  isError: false
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.isloading = true
    },
    fetchSuccess: (state, action) => {
      state.isloading = false
      state.currentUser = action.payload;
    },
    fetchFailure: (state) => {
      state.isloading = false
      state.isError = true
    }
  },
})

export const { fetchStart, fetchSuccess, fetchFailure } = postSlice.actions

export default postSlice.reducer