import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Slices/slice";
import storageSession from "redux-persist/lib/storage/session";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig={
    key:'root',
    storage:storageSession,
}

const persistedReducer=persistReducer(persistConfig,reducer)

const store=configureStore({
    reducer:{
        persistedReducer
    }
})
export const persister =persistStore(store)
export default store ;