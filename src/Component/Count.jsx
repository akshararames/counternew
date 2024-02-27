import React, { useState } from 'react'//useState import cheyyanam

function Count() {
    const[counter,setCounter] = useState(0)//state creation   //var counter=0
    function incrementCounter(){
        setCounter(counter+1) //counter value incremented by 1
    }
    function decrementCounter(){
        if(!counter ==0){
        setCounter(counter-1) //counter value decremented by 1
    }
}
    function resetCounter(){
        setCounter(0)  //counter value reset to 0
    }
  return (
    <div>
        <div>
            <h1 style={{marginLeft :'450px', marginTop : '50px'}}>Counter App</h1>
            <h1 style={{marginLeft : '550px', marginTop : '20px'}}>{counter}</h1>
            <button className='btn btn-success' style={{marginLeft: '300px' , marginTop : '20px'}}  onClick={incrementCounter}>Increment</button>
            <button className='btn btn-danger'onClick={decrementCounter} style={{marginLeft: '150px', marginTop : '20px'}}>Decrement</button>
            <button className='btn btn-primary'onClick={resetCounter} style={{marginLeft: '190px', marginTop : '20px'}}>Reset</button>
        </div>
    </div>
  )
}

export default Count