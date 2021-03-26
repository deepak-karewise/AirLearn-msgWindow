import { users } from "../constants";

const initialState = {
    user: users,
    message:'',
}


const Reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'USER_DETAILS':
            return({...state, user: action.payload})
            break;
        case 'MESSAGE':
            return({...state, message: action.payload})
            break;
    
        default:
            return state;
            break;
    }
}

export default Reducer;