import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import tshirtReducer from '@/presentation/redux/tshirt-slice'
import shoppingCartReducer from '@/presentation/redux/shopping-cart-slice'
import cartCounterSlice from '@/presentation/redux/cart-counter-slice'
import modalReducer from '@/presentation/redux/modal-slice'

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  tshirt: tshirtReducer,
  shoppingCart: shoppingCartReducer,
  cartCounter: cartCounterSlice,
  modal: modalReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

const persistor = persistStore(store)
console.log(persistor)
export default persistor
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
