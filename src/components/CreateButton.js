import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

export default function CreateButton() {
    const { setShowEventModal } = useContext(GlobalContext)

  return (
    <div  className="text-xl border px-2 py-1 rounded-2xl " 
          onClick={() => setShowEventModal(true)}>+ADD</div>
  )
}
