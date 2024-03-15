import React, { useContext, useState } from 'react'
import GlobalContext from '../context/GlobalContext'
import dayjs from 'dayjs'


export default function TaskModal() {
  const { setShowEventModal, monthSelected, yearIdx, dispatchCalEvent, selectedEvent } = useContext(GlobalContext)

  const [title, setTitle ] = useState(selectedEvent ? selectedEvent.title: "")
  const [milestone, setMilestone] = useState("")
  const [milestones, setMilestones] = useState(selectedEvent ? selectedEvent.description: [])

    

  function handleSubmit(){
    const calendarTask = {
        title, 
        milestones,
        color: handleCompletion(),
        month: monthSelected,
        year: yearIdx,
        id: selectedEvent ? selectedEvent.id : Date.now()
    }

    if(selectedEvent) {
        dispatchCalEvent({type: 'update', payload: calendarTask})
    } else {
            dispatchCalEvent({type: "push", payload: calendarTask})
    }
    

    setShowEventModal(false)
  }

  function handleDesprictionChange(value){
    const updatedMilestones = [...milestones, {name: value, checked: false}];
    setMilestones(updatedMilestones);
    setMilestone("");
  }

  function handleDelete(value){
    const updatedDescription = milestones.filter((e) => e.name !== value)
    setMilestones(updatedDescription)
  }


  function handleCompletion(){
    let counter = 0
    milestones.map(e => e.checked ? counter++ : null)

    if(milestones.length === counter){
        return `bg-green-300`
    } else if (milestones.length > counter && counter !== 0) {
        return `bg-orange-300`
    } else {
        return `bg-red-300`
    }
  }

  return (
    <div className="text-grey-800 font-mono h-full w-full flex fixed justify-center items-center">
        <div className="justify-center  content-center h-min w-96 rounded-lg bg-white border shadow-lg  bg-slate-50">
            <div className="felx w-full p-4 justify-center">
                <div className='flex w-full'>
                    <button className="rounded-full px-3.5 pb-2 pt-1.5 border-2 ease-in-out duration-100  border-slate-200 hover:border-slate-500 hover:shadow-sm flex items-center text-sm text-slate-500 "
                        onClick={() => {handleSubmit(); setShowEventModal(false); }}>      
                        x
                    </button>
                    <div className='w-full text-end'>

                    </div >
                    <button className='mx-4 px-2 border rounded-full'
                            onClick={() => {dispatchCalEvent({type:"delete", payload: selectedEvent})
                                            setShowEventModal(false)}}>
                        DEL
                    </button>
                </div>
                
                
                <div className="mt-4 flex">
                    <input  placeHolder={"Title"} 
                            value={title}
                            required
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-32 text-sm border rounded-lg p-1"/>

                    <div className="w-1/2 w-50 ml-20">
                        <button className="w-16 text-sm px-2 py-1.5 border-2 rounded-md rounded-r-none bg-slate-100">{yearIdx}</button>
                        <button className="w-16 text-sm px-2 py-1.5 border-2 rounded-md  border-l-0 rounded-l-none">{dayjs().month(monthSelected).format('MMM').toUpperCase()}</button>
                    </div>
                    
                </div>

                <div className="text-sm mt-8">
                <ul>
                    {milestones.length !== 0 ?
                        milestones.map((milestone, idx) => (
                        <div className='flex ' key={idx}>
                            <div className='flex justify-between px-2  py-1 w-2/3 items-center  hover:bg-pink-50 hover:rounded-md'>
                                <div className='flex justify-start'>
                                    <input  type="checkbox" 
                                            defaultChecked={milestone.checked}
                                            onChange={() => {milestone.checked = !milestone.checked}}/>
                                    <label className="ml-2 text-slate-600">{milestone.name}</label>
                                </div>

                                <button className='flex border rounded-full hover:border-black py-0 px-2' onClick={() => {handleDelete(milestone.name)}}>x</button>
                            </div>
                        </div>
                        )) : <div> No milestones yet </div>
                    }
                </ul>

                { milestones.length < 3 ? (
                    <>
                        <input
                        type="text"
                        placeholder='Next milestone...'
                        value={milestone}
                        required
                        onChange={(e) => setMilestone(e.target.value)}
                        className="mt-4 rounded-lg rounded-tr-none rounded-br-none p-1 text-sm border w-64"
                        />
                        <button onClick={() => {handleDesprictionChange(milestone)}}
                                className='text-md px-2 border py-1 rounded-lg rounded-tl-none rounded-bl-none hover:border-black '>
                        ADD
                        </button>
                    </>
                    ) : (
                    <div className="mt-4 p-1 text-sm w-64"> Max Milestones</div>)}    

                </div>

                <div className="w-full flex justify-center">
                    <button 
                    onClick={() => {handleCompletion(); handleSubmit()}}
                    className="bg-pink-100 border-pink-200 shadow-md shadow-pink-100 text-sm mt-6 px-6 py-1.5 text-slate-500 flex justify-center border-2 rounded-lg">SAVE</button>
                </div>

                
            </div>
            
        </div>
        
    </div>
  )
}
