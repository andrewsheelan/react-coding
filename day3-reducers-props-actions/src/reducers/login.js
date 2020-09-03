import { types } from "../actions"

const initState = {
    email: '',
    password: ''
}

export default (state=initState, action) => {
    switch(action.type) {
        case types.LOGIN_STARTED:
            return {
                email: action.email,
            }
        default:
            return state
    }
}