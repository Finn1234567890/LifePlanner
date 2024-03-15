import React, {useState, useContext} from 'react';
import CalendarHeader from './components/CalendarHeader';
import GlobalContext from './context/GlobalContext';
import TaskModal from './components/TaskModal';
import TimeBar from './components/TimeBar';
import Months from './components/Months'
import './App.css';

function App() {
const {showEventModal} = useContext(GlobalContext)

  return (
    <React.Fragment>
      {showEventModal ? <TaskModal /> : ""}
      <div className='h-screen flex flex-col'>
        <TimeBar/>
        <CalendarHeader />
        <div className="flex flex-1">
          <Months/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
