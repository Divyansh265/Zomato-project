import { GET_USER, SELF, CLEAR_USER } from "./user.type"
const initialState = {
    user: {}
}
const userRuducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
            }
        case SELF:
            return {
                ...state,
                ...action.payload,
            }
        case CLEAR_USER:
            return {
                user: {},
            }
        default:
            return {
                ...state,
            }
    }
}
export default userRuducer