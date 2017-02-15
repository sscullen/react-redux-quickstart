// optionally prefix your actions and reducers to avoid duplicate action names

export function setName(name) {
    return {
        type: 'USER_SET_NAME',
        payload: name
    }
}

export function setAge(age) {
    return {
        type: 'USER_SET_AGE',
        payload: age
    }
}