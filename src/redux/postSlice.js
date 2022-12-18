import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  isloading: false,
  isError: false
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isloading = true
    },
    loginSuccess: (state, action) => {
      state.isloading = false
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isloading = false
      state.isError = true
    },
    logout: (state) => {
      state.currentUser = null
      state.isloading = false
      state.isError = false
    }
  },
})

export const { loginStart, loginSuccess, loginFailure, logout } = postSlice.actions

export default postSlice.reducer