import React from 'react'; 
import { Button } from './Button';
function Counter(props) {
  const [counter,setCounter] =React.useState(props.initial)
  function changeCounterFn(val) {
    setCounter(counter + val);    
  }
  function doubleFn() {
    setCounter(counter*2);    
  }
  return (
    <>    
      <h1>Counter Value:{counter} </h1>
      <Button text='Increment' callback={()=>changeCounterFn(1)}/>
      <Button text='Decrement' callback={()=>changeCounterFn(-1)}/>
      <Button text='Double' callback={doubleFn}/>   
    </>
  )
}




export {Counter}