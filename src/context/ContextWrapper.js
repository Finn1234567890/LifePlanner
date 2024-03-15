import React, {useState, useReducer, useEffect} from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'

function savedEventsReducer(state, {type, payload}){
  switch (type) {
      case 'push':
          return [...state, payload]
      case 'update':
        return state.map(evt => (evt.id === payload.id ? payload : evt))
      case 'delete':
          return state.filter( evt => evt.id !== payload.id)
      default:
          throw new Error()
  }
}

function initEvents() {
  const storageEvents = localStorage.getItem("savedEvents")
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : []
  return parsedEvents
}

export default function ContextWrapper(props) {
    const [showEventModal, setShowEventModal] = useState(false)
    const [yearIdx, setYearIdx] = useState(dayjs().year())
    const [monthSelected, setMonthSelected] = useState(dayjs().month())
    const [selectedEvent, setSelectedEvent] = useState(null)

    const [savedEvents, dispatchCalEvent] = useReducer(
      savedEventsReducer, 
      [],
      initEvents)

      useEffect(() => {
        localStorage.setItem("savedEvents", JSON.stringify(savedEvents))
      }, [savedEvents])
    
      useEffect(() => {
        if(!showEventModal){
          setSelectedEvent(null)
        }
      }, [showEventModal])

  return (
    <GlobalContext.Provider
    value={{showEventModal,
            setShowEventModal,
            yearIdx,
            setYearIdx,
            setMonthSelected,
            monthSelected,
            dispatchCalEvent,
            selectedEvent,
            setSelectedEvent,
            savedEvents}}>
        {props.children}
    </GlobalContext.Provider>
  )
}
