import { ActionTypes } from "../Action/ActionTypes";




const intialStates = {
    school: [],
}

const SchoolReducers = (state = intialStates, action) => {
    let newState = { ...state };
    switch (action.type) {
        case ActionTypes.GET_ALL_STUDENTS:
            console.log(action.payload);
            newState.school = action.payload;
            break;
        case ActionTypes.GET_BYID_STUDENT:
            console.log(action.payload);
            newState.school = action.payload;
            break;
        case ActionTypes.ADD_STUDENT:

            break;

        default:
            newState = state;

    }

    return newState;
}

export default SchoolReducers;