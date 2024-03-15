import React from 'react'

  
const GlobalContext = React.createContext({
    yearIdx: 0,
    setYearIdx: (idx) => {},
    showEventModal: false,
    setShowEventModal: () => {},
    monthSelected: null,
    setMonthSelected: (month) => {},
    savedEvents: [],
    selectedEvent: null,
    setSelectedEvent: () => {},
    dispatchCalEvent: ({type, payload}) => {}
})

export default GlobalContext
