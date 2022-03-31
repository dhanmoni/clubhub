import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer'
import thunk from "redux-thunk" 
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension';


const persistConfig = {
  timeout: null,
  key:'root1',
  storage: storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
)
export const persistor = persistStore(store)

