import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import reducer from "./reducer"


const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"]
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer
    
})

export const persiststore = persistStore(store)

export default store