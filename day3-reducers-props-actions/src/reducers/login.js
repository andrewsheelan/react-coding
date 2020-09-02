import { types } from "../actions"

const initState = {
    email: '',
    password: ''
}

export default (state=initState, action) => {
    console.log(action)
    switch(action.type) {
        case types.LOGIN_STARTED:
            return {
                email: action.email,
                password: action.password
            }
        default:
            return state
    }
}