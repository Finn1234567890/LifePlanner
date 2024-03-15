import React, { useContext } from 'react'
import Month from './Month'
import GlobalContext from '../context/GlobalContext'

const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ]

export default function Months() {
  const { yearIdx } = useContext(GlobalContext)

  return (
    <div className="flex justify-center w-full mb-10">
      <div className='min-w-80 w-9/12 justify-center'>
        <div className="flex-1 h-full grid grid-cols-3 border rounded-lg ">
          {months.map((month, idx) => (
              <React.Fragment>
                  <Month month={month} year={yearIdx} idx={idx}/>
              </React.Fragment>
          ))}
          
        </div>
      </div>
    </div>
    
    
  )
}
