import React from 'react'
import TaskCard from '../Cards/TaskCard';

const MyTasks = ({ data, setData, complete, setComplete }) => {

  const RemoveTask = (id) => {
    setData((oldData) => {
      return oldData.filter((curr, index) => {
        return index !== id
      })
    })
  }

  const completeTask = (id) => {
    const t = data.filter((curr, index) => {
      if (index === id){return curr}
    })
    setComplete((old) => {
      return [...old, t]
    })

    RemoveTask(id);
  }

  const remove = (id) =>{
    setComplete((old)=>{
      return old.filter((curr,index)=>{
        return index !== id
      })
    })
  }

  const pending = (id)=>{
    const m= complete.filter((curr,index)=> {
      if(index===id){return curr};
    })
    setData((old)=>{
      return [...old,m]
    })

    remove(id)
  }
  return (
    <div className='flex flex-row px-14 py-6 gap-2'>
      <div className='basis-1/2 border border-gray-500 p-5 flex gap-2 flex-col'>
        <div className='text-center'>Pending Tasks</div>
        {
          data.map((element, index) => {
            return (
              <TaskCard key={index} element={element} index={index} remove={RemoveTask} complete={completeTask} />
            )
          })
        }
      </div>
      <div className='basis-1/2 border border-gray-500 p-5 flex gap-2 flex-col'>
        <div className='text-center'>Completed Tasks</div>
        {
          complete.map((element, index) => {
            return (
              <div className='flex flex-row items-center justify-center gap-2'>
                <div key={index} className=' w-full text-xl bg-gray-100 text-center px-10 rounded-lg py-2  '>{element}</div>
                <div className='bg-red-500 rounded-lg py-2 px-5 cursor-pointer'
                onClick={()=>{remove(index)}}
                >Remove</div>
                <div className='bg-yellow-500 rounded-lg py-2 px-5 cursor-pointer'
                onClick={()=>{pending(index)}}
                >Pending</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default MyTasks