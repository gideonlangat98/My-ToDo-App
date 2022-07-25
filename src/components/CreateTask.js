import React from 'react';

function CreateTask({todo, handleTodoInput, handleSubmit}) {

  return (
    <div>
        <div className='input--wrapper'>
            <input type="text" value={todo} onChange={handleTodoInput} placeholder='Enter Your Task For Today' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default CreateTask;