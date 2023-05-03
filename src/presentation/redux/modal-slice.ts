import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  modalIsVisible: boolean
}
const initialState: InitialState = {
  modalIsVisible: false
}

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    showModal: state => {
      state.modalIsVisible = !state.modalIsVisible
    }
  }
})

export default shoppingCartSlice.reducer
export const { showModal } = shoppingCartSlice.actions
