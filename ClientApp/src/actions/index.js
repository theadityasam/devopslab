//Action Creator
export const addUserAction=(user)=>{
    return {
        type:'ADD_USER_TO_LIST',
        payload:user
    }
}

export const selectUser=(user)=>{
    return {
        type:'USER_SELECTED',
        payload:user
    };
}

export const deleteUser=(user)=>{
    return {
        type:'DELETE_USER_FROM_LIST',
        payload:user
    }
}

//button clicked 
//onclick--- execute action 
//action-- return object to all the members of redux store