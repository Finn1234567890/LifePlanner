import React, {useContext, useEffect, useState} from 'react'
import dayjs from 'dayjs'
import GlobalContext from '../context/GlobalContext'
import months from '../presets/months.json'

export default function Month({month, year, idx}) {
    
    const [ monthEvents, setMonthEvents] = useState([])

    const { setMonthSelected, setSelectedEvent, setShowEventModal, savedEvents } = useContext(GlobalContext)

    useEffect(() => {
        const events = savedEvents.filter((e) => months[e.month].toUpperCase() === month.toUpperCase() && e.year === year)
        setMonthEvents(events)
    }, [savedEvents, month])

    function getSelectedMonth(){
        if(dayjs().month() === idx && year === dayjs().year()) {
            return "bg-blue-600 text-white rounded-full w-min px-2"
        } else {
                    return ""
        }}
        

        function handleTrue(e, idx){
            if(e.year === year){
                  
            return <div className='justify-center flex'>
                    <div key={idx}
                        className={`${e.color} px-2 mt-2 mx-2 text-md w-3/4 justify-center p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
                        onClick={() => {setSelectedEvent(e) 
                                        setShowEventModal(true)}}>
                            {e.title}
                    </div>
                </div>
                
            }
        }
       
  return (
    <div    className="border rounded-lg hover:border-gray-500 py-2 border-gray-200 flex flex-col"
            onClick={() => {setMonthSelected(idx); setShowEventModal(true)}}>

        <div className='flex justify-center w-full'>
            <p className={`flex justify-center ${getSelectedMonth()}`}>
                {month}
            </p>
        </div>
        {monthEvents.map((e, idx) => (
            handleTrue(e, idx)
        ))}
        
    </div>
  )
}
