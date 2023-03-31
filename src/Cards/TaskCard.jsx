import React from 'react'

const TaskCard = (props) => {

  return (
    <div className='flex flex-row items-center justify-center gap-2'>
        <div key={props.index} className=' w-full text-xl bg-gray-100 text-center px-10 rounded-lg py-2  '>{props.element}</div>
        <div className='bg-red-500 rounded-lg py-2 px-5 cursor-pointer'
        onClick={()=>{props.remove(props.index)}}
        >Remove</div>
        <div className='bg-yellow-500 rounded-lg py-2 px-5 cursor-pointer'
        onClick={()=>{props.complete(props.index)}}
        >completed</div>
    </div>
  )
}

export default TaskCard