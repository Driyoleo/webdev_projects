/* eslint-disable no-unused-vars */
import React from 'react'
import "./task.css"

const Task = (data) => {

  return (
    <div className=' flex bg-purple-950 rounded-xl px-6 items-center h-10 justify-between mb-2'>
      <p className=' text-white'>{data.t}</p>
      <div>
      {/* <button className=' done  bg-white mr-2 px-3 rounded-lg' onClick={handledone}>Done</button>
      <button className=' cancel bg-white px-3 rounded-lg ' onClick={handledelete}>Cancel</button> */}
      </div>
    </div>
  )
}

export default Task

