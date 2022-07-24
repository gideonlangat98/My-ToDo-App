import React from 'react'

function TaskList({tasks}) {
  
    //const { tasks } = props
  return (
    <div>
        <div className='tasklist--wrapper'>
           { tasks.map((task, index) => {
            return (
                <div key={index}>{task.title}</div>
            )
           }) }
        </div>
    </div>
  )
}

export default TaskList