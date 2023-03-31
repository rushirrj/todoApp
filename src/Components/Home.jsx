import React, { useState } from 'react'
import TaskCard from '../Cards/TaskCard';
const Home = ({setData,data,complete,setComplete}) => {
  const[list, setList] = useState('')
  

  const Addtasks = async()=>{
    setData((oldData)=>{
      return [...oldData,list] 
    })
    setList("")
  }

  const RemoveTask=(id)=>{
    setData((oldData)=>{
      return oldData.filter((curr,index)=>{
        return index !== id
      })
    })
  }

  const completeTask = (id) =>{
    const t = data.filter((curr,index)=>{
      if(index === id){return curr}
    })
    setComplete((old)=>{
      return [...old,t]
    })

    RemoveTask(id);
  }

  return (
    <div className=' pt-4 flex flex-col gap-4 justify-center items-center w-1/2' style={{width:"100vw"}} >
      <div className='flex flex-row gap-4' style={{width:"60%"}}>
        <input className='border border-gray-500 text-center w-full' placeholder='Enter the task'
        value={list}
        onChange={(e)=>{setList(e.target.value)}}
        />
        <div >
          <div className='bg-green-600 py-2 px-4 cursor-pointer text-black' onClick={Addtasks}> Add</div>
        </div>
      </div>

      <div className='flex flex-col gap-3 ' style={{width:"60%"}}>
        {
          data.map((element,index)=>{
            return(
              <TaskCard key={index} element={element} index={index} remove={RemoveTask} complete={completeTask}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home