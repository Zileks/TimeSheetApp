import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteEvent } from '../../../actions/eventAction';

const Event = ({ event  }) => {
    const dispatch = useDispatch();

    return(
        
        <div className="check-flag">
            <span className="small-text-label">Title</span>
            <span className="small-text-label hours">Hours</span>
            <span className="check-flag-label">{event.name}</span>
            <span className="hours-box check-flag-label">{event.time}</span>
            <p className="delete" onClick={() => dispatch(deleteEvent(event._id))}>&#10007;</p>
        </div>
        
    )   
}

export default Event;