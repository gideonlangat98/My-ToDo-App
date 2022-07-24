import React from 'react'

function CreateTask() {
  return (
    <div>
        <div className='input--wrapper'>
            <input type="text" placeholder='Enter Your Task For Today' />
            <button>Submit</button>
        </div>
    </div>
  )
}

export default CreateTask