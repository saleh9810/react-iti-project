import { ADD_TODO__TASK, REMOVE_TODO__TASK } from "../actions/types";

const initialState  = {
    todos : []
}

 function todoReducer(state = initialState, action) {

    switch(action.type) {
        case ADD_TODO__TASK :
            return {
                ...state,
                todos : [ action.payload, ...state.todos]
                
            };

         case REMOVE_TODO__TASK : 

         return {...state , todos : state.todos.filter((item)=>{return action.payload !== item.title})}


            default: return state

    }


}


export default  todoReducer;