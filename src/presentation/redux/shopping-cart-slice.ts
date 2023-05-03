import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  numOfCartItems: number
}
const initialState: InitialState = {
  numOfCartItems: 0
}

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addItemToCart: state => {
      state.numOfCartItems++
    },
    removeItemToCart: (state) => {
      state.numOfCartItems++
    }
  }
})

export default shoppingCartSlice.reducer
export const { addItemToCart, removeItemToCart } = shoppingCartSlice.actions
