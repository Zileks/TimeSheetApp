import * as api  from './api';


export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL',
    HIDE_MODAL: 'HIDE_MODAL',
    SHOW_MODAL: 'SHOW_MODAL',
    ON_SUBMITBUTTON : 'ON_SUBMITBUTTON',
    
    
}

export const getEvents = () => async (dispatch) => {
  try {
    const { data } = await api.fetchEvents();

    dispatch({ type: ACTION_TYPES.FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createEvent = (event) => async (dispatch) => {
  try {
    const { data } = await api.createEvent(event);

    dispatch({ type: ACTION_TYPES.CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteEvent = (id) => async (dispatch) => {
  try {
    await api.deleteEvent(id);

    dispatch({ type: ACTION_TYPES.DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

  

  

  