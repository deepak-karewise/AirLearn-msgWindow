
// import dispatch from 'react-redux';
import { users } from "../constants";


// const userDetails = ({dispatch}) => {

//     const data = users;
//     console.log(data);
//     dispatch({
//         type: 'USER_DETAILS',
//         payload: data
//     })

// }

// export default userDetails;

export const message = (msg,dispatch) => {
    const data = msg;
    dispatch({
        type: 'MESSAGE',
        payload: data
    })
}
