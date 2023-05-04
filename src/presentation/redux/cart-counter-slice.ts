import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  numOfCartItems: number
}
const initialState: InitialState = {
  numOfCartItems: 0
}

const cartCounterSlice = createSlice({
  name: 'numOfCartItems',
  initialState,
  reducers: {
    upCounter: state => {
      state.numOfCartItems++
    },
    downCounter: (state) => {
      state.numOfCartItems--
    }
  }
})

export default cartCounterSlice.reducer
export const { upCounter, downCounter } = cartCounterSlice.actions
