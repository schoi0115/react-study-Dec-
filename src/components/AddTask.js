import { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const [startDate, setStartDate] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('Plase add a task')
            return
        }
        onAdd({ text, day, reminder })
        setText('')
        setDay(startDate)
        setReminder(false)
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task: </label>
                <input
                    type='text'
                    placeholder='Add Task'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Day & Time: </label>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    value={day}
                    dateFormat='MM/dd/yyyy'
                    isClearable
                    showYearDropdown
                    scrollableYearDropdown
                    scrollableMonthYearDropdown

                />
                <input
                    type='text'
                    id='DatePicker'
                    placeholder='Add Day & Time'
                    value={day}
                    onChange={(e) => setDay(e.target.value)}

                />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder </label>
                <input
                    type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}
export default AddTask