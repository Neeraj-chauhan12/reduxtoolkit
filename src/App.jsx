import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './features/counterslice'

const App = () => {

   const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  function handleaddition(){
    dispatch(increment());
    
  }

  function handleminus(){
    dispatch(decrement())

  }

  function handlereset(){
    dispatch(reset())

  }

  return (
    <div className='bg-gray-700 flex justify-center items-center h-screen flex-col gap-5'>
      <button className='bg-black text-white text-2xl px-3 py-5  rounded-2xl border-2 border-gray-500' onClick={handleaddition}>+</button>
      <div className='text-3xl text-white'>
        count:{count}
      </div>
      <button className='bg-black text-white text-2xl px-3 py-5  rounded-2xl border-2 border-gray-500'  onClick={handleminus}>-</button>
      
      
      <button className='bg-black text-white text-2xl  px-3 py-5 rounded-2xl border-2 border-gray-500'  onClick={handlereset}>reset</button>
    </div>
  )
}

export default App
