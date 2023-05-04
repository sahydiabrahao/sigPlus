import { createSlice } from '@reduxjs/toolkit'

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: [],
  reducers: {
    addItemToCart: (state, action) => {
      state.push(action.payload)
    }
  }
})

export default shoppingCartSlice.reducer
export const { addItemToCart } = shoppingCartSlice.actions
