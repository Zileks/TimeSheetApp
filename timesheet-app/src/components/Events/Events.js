import React from 'react';
import { useSelector } from 'react-redux';
import Event from './Event/Event';



const Events = () => {
  const events = useSelector((state) => state.events);

    return(
        <>
    {events.map((event) => (
       <div className="item-row" key={event._id}>
      <Event event={event} />
      </div>
    ))}   
  </>
)}

export default Events;
