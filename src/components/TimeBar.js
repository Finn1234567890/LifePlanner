import dayjs from 'dayjs'

export default function TimeBar(){

    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    
    return(
        <div id="body" className='w-full flex justify-center'>
            <div id="date-time" className="border shadow-md bg-white min-w-80 w-8/12 justify-end flex mt-10 p-6 px-4 rounded-xl">
                <label className="text-left text-sm w-full opacity-100 pl-8">
                   {dayjs(date).format(`dddd, MMMM D, YYYY`)}
                </label>
                <label className="text-right w-full pr-8">
                {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}
                </label>
            </div>
        </div>
    )
}