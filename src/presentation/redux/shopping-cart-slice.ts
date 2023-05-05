import { createSlice } from '@reduxjs/toolkit'

let id: number = 0

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: [],
  reducers: {
    addCartItem: (state, action) => {
      action.payload.id = id++
      state.push(
        action.payload
      )
    },
    removeItemFromCart: (state, action) => {
      const index = state.indexOf(state.find(element => element.id === action.payload))
      state.splice(index, 1)
    }
  }
})

export default shoppingCartSlice.reducer
export const { addCartItem, removeItemFromCart } = shoppingCartSlice.actions
