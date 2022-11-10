import { combineReducers } from "redux";
//reducer or storage units
import auth from "./auth/auth.reducer"
import user from "./user/user.reducer"
const rootReducer = combineReducers({

    user,
    auth,

})
export default rootReducer