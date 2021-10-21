import { INCREMENT, DECREMENT, RESET } from "../actions/types";

const initialState  = {
    count : 0
}

 function counterReducer(state = initialState, action) {

    switch(action.type) {
        case INCREMENT :
            return {
                ...state,
                count :  action.payload + state.count
                
            };

         case DECREMENT : 
         if(state.count === 0 ) {
            return  state 
         }
         return {
             ...state,
             count : state.count - action.payload
             
         }

         case RESET : 
         return {
             ...state,
             count : action.payload
         }


            default: return state

    }


}


export default  counterReducer;