import { ACTION_TYPES } from "../actions/eventAction";



export default  (events=[],action)=>{
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return action.payload;

        case ACTION_TYPES.CREATE: 
                return [...events, action.payload];
            
        case ACTION_TYPES.DELETE:
                return events.filter((event) => event._id !== action.payload);
                     
        default:
            return events;
    }

}


