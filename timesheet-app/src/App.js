import React, { useState, useEffect } from 'react';
import { getEvents, createEvent } from './actions/eventAction';
import { useDispatch, useSelector } from 'react-redux';
import Events from './components/Events/Events';
import moment from 'moment';



const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const [values, setValues] = useState({})
  const [eventData, setEventData] = useState({ name: '', time: '' });
  const event = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const vreme = useSelector((state) => state.events.map((x) => parseInt(x.time)))

  useEffect(() => {
    dispatch(getEvents());
    getQuote()
  }, [currentId , dispatch]);

  useEffect(() => {
    if (event) setEventData(event);
  }, [event]);

  const clear = () => {
    setCurrentId(0);
    setEventData({ name: '', time: '' });
  };

  const getQuote = () => {
    fetch("/quotes.json")
      .then(res => {
        return res.json();
      })
      .then(resp => {
        let data = resp.quotes
        let quoteNum = Math.floor(Math.random() * data.length)
        let randomQuote = data[quoteNum]
        setValues({
          ...values,
          quote: randomQuote['quote'],
          author: randomQuote['name']
        })
      })
  };

  const total = vreme.reduce((x,y,) => x+y , 0) // Total hours value

  function openModal() {
    document.getElementById("modaling").classList.add("is-visible");
  }
  function closeModal() {
    document.getElementById("modaling").classList.remove("is-visible");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createEvent(eventData));
    closeModal();
    clear();
  };

  

  document.addEventListener("click", e => {
    if (e.target === document.querySelector(".modal-wrap.is-visible")) {
      document.querySelector(".modal-wrap.is-visible").classList.remove("is-visible");
    }
  })

  document.addEventListener("keyup", e => {
    if (e.key === "Escape" && document.querySelector(".modal-wrap.is-visible")) {
      document.querySelector(".modal-wrap.is-visible").classList.remove("is-visible");
    }
  })

  return (
    <>
      <div className="page-wrap">
        <header className="header">
          <div className="wrap">
            <span className="btn-icon">
              <img
                className="icon icon-plus js-modal-init"
                src="icons/icon-add.svg"
                alt="Add New Item"
                onClick={openModal}
              />
            </span>
            <div className="header-blockquote">
              <h1 className="header-quote">
                {values.quote}
              </h1>
              <div className="header-cite">{values.author}</div>
            </div>
          </div>
          <div className="header-inner">
            <div className="wrap">
              <img className="logo" src="images/vegait-logo.svg" alt="VegaIT" />
              <div className="date-wrap">
                <img className="icon" src="icons/icon-calendar2.svg" alt="Calendar" />
                <time> {moment().format('LL')} </time>
              </div>
            </div>
          </div>
        </header>
        <main className="main">
          <div className="wrap" >
            <Events />
            <div>
              <div className="total align-right">
                <label className="total-label">Total:</label>
                <input
                  className="total-input"
                  type="text"
                  value={total}
                  readOnly />
              </div>
              <div className="total align-left">
              </div>

            </div>
          </div>
        </main>
      </div>
      <div className="modal-wrap js-modal" id="modaling" onSubmit={handleSubmit} >
        <div className="modal js-modal-inner">
          <h2>Create a task:</h2>
          <form >
            <div className="field-wrap">
              <label className="label">
                Title:
                  </label>
              <input
                className="field"
                type="text"
                name="name"
                onChange={(e) => setEventData({ ...eventData, name: e.target.value })}
                placeholder="Enter title here..."
                required
                maxLength="40"
              />

            </div>
            <div className="field-wrap">
              <label className="label">
                Hours:
                  </label>
              <input
                className="field"
                type="number"
                name="time"
                onChange={(e) => setEventData({ ...eventData, time: e.target.value })}
                placeholder="Add hours here..."
                min="0"
                max="100"
                required

              />

            </div>
            <div className="btn-wrap align-right">
              <input className="btn" type="submit" value="Create" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
