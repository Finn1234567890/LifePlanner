import React, {useContext} from 'react'
import GlobalContext from '../context/GlobalContext'
import dayjs from 'dayjs'


export default function CalendarHeader() {
  const {yearIdx, setYearIdx} = useContext(GlobalContext) 

  console.log(yearIdx)

  function handlePrevYear(){
    setYearIdx(yearIdx - 1)
  }

  function handleNextYear(){
    setYearIdx(yearIdx + 1)
  }

  function handleReset(){
    setYearIdx(dayjs().year())
  }

  return (
    <div className='w-full flex justify-center'>
      <div className='flex justify-start shadow-md bg-white min-w-80 w-8/12 mb-10 mt-2 border p-6 px-4 rounded-xl'>
        <div className='flex border px-1 py-1 rounded-md'>
          <button className="mr-4 border-r-2" onClick={handlePrevYear}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 px-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>  
          </button>
          {yearIdx}
          <button className="ml-4 border-l-2" onClick={handleNextYear}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 px-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
        
        <div className="mx-4 border px-2 py-1 rounded-md hover:shadow-sm hover:bg-pink-50">
          <button onClick={handleReset}>
            Today
          </button>
        </div>
          
    </div>
      
        
      
    </div>
    
    
  )
}
