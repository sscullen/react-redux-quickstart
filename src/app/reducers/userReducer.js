// ES6 default values for function parameters
// optionally prefix your actions and reducers to avoid duplicate action names
const userReducer = (state = {
    name: "WORD UP",
    age: 31
}, action) => {

    switch(action.type) {
        case 'USER_SET_NAME':
            // make sure to create a new state and update your state properties in an immutable way
            // otherwise redux will not work
            state = {
                ...state,
                name: action.payload
            }

            break;
        case 'USER_SET_AGE':
            state = {
                ...state,
                age: action.payload
            }

            break;
        default:
            break;
    }

    return state
};

export default userReducer