import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './features/counterslice'

const App = () => {

  const [amount, setamount]=useState(0);

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

  function handlepayload(){
    dispatch(incrementByAmount(amount))
  }

  return (
    <div className='bg-gray-700 flex justify-center items-center h-screen flex-col gap-5'>
      <button className='bg-black text-white text-2xl px-3 py-5  rounded-2xl border-2 border-gray-500' onClick={handleaddition}>+</button>
      <div className='text-3xl text-white'>
        count:{count}
      </div>
      <button className='bg-black text-white text-2xl px-3 py-5  rounded-2xl border-2 border-gray-500'  onClick={handleminus}>-</button>
      
      
      <button className='bg-black text-white text-2xl  px-3 py-5 rounded-2xl border-2 border-gray-500'  onClick={handlereset}>reset</button>
      
      <input value={amount} onChange={(e)=>setamount(e.target.value)} className='text-2xl px-2 py-2 border-2 border-gray-200 ' type='number' />
      <button className='bg-black text-white text-2xl  px-3 py-5 rounded-2xl border-2 border-gray-500'  onClick={handlepayload}>add with amout</button>
    </div>
  )
}

export default App
