import { combineReducers } from "redux";
import userSlice from "./userSlice";


const reducer = combineReducers({
    user: userSlice.reducer
})

export default reducer