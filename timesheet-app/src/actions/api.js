import axios from "axios"

const url = 'https://zile-timesheet.herokuapp.com/events';

export const fetchEvents = () => axios.get(url);
export const createEvent = (newEvent) => axios.post(url, newEvent);
export const deleteEvent = (id) => axios.delete(`${url}/${id}`);

