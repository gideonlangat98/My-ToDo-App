import React from 'react'

function TaskList({tasks}) {
  
    //const { tasks } = props
  return (
    <div>
        <div className='tasklist--wrapper'>
           { tasks && tasks.length > 0 ? tasks.map((task, index) => (
                <div key={index}>{task.title}</div>
            )) :
            <>
            <div>
              No Tasks present
            </div>
            </> }
        </div>
    </div>
  )
}

export default TaskList