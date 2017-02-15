import React from 'react'
import { render } from 'react-dom'

// setting up redux
import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux'

import  App from './components/App'


// ES6 default values for function parameters
const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {

    switch(action.type) {
        case 'ADD':
            // make sure to create a new state and update your state properties in an immutable way
            // otherwise redux will not work
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            }

            break;
        case 'SUBTRACT':
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            }

            break;
        default:
            break;
    }

    return state
};

// ES6 default values for function parameters
const userReducer = (state = {
    name: "WORD UP",
    age: 31
}, action) => {

    switch(action.type) {
        case 'SET_NAME':
            // make sure to create a new state and update your state properties in an immutable way
            // otherwise redux will not work
            state = {
                ...state,
                name: action.payload
            }

            break;
        case 'SET_AGE':
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

// multiple reducers combined into one reducer
// the store will only accept one reducer so you use combineReducers to join multiple ones together

// myLogger middleware, middle ware sits between the action and the reducer on the REDUX flow diagram
// function (store) { return function (next) { return function(action) {}}}
// it looks super confusing but just remember how fat arrow funcs in ES6 implicitly return the
// thing directly after the arrow
const myLogger = (store) => (next) => (action) => {
    console.log("Logged action: ", action)
    // need to call next(action) to allow the action to pass to the reducer
    next(action)
}


const store = createStore(
    combineReducers({
        mathReducer,
        userReducer
    }),
    {},
    applyMiddleware(logger())
);
// RE: above, some middleware can be passed as the function directly, redux-logger has afunction that has to run
// in order to return the chained functions that allow middleware to work

store.subscribe(() => {
    //console.log('Store updated', store.getState())
})

// provider used in the main render function
// you have to wrap your app in the Provider component to connect from REDUX to all the components
render(<Provider store={store}>
        <App />
    </Provider>,
    window.document.getElementById("app"));
