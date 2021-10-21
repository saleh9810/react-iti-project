import { ADD_TODO__TASK, REMOVE_TODO__TASK, INCREMENT, DECREMENT, RESET} from "./types";

 export const addTodo = (payload)  => {

    return {
        type : ADD_TODO__TASK,
        payload
       
    }
    
 }


 export const removeTodo = (payload) => {
    return {
        type : REMOVE_TODO__TASK,
        payload
    }
    
}

export const increment = (payload) => {
    return {
        type : INCREMENT,
        payload
    }
    
}

export const decrement = (payload) => {
    return {
        type : DECREMENT,
        payload
    }
    
}

export const reset = (payload) => {
    return {
        type : RESET,
        payload
    }
}

