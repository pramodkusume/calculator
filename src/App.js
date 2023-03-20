

import React, { useState } from "react";
import { useRef } from "react";
import './App.css'

function App()
{
const [result,setresult]= useState(0);
const inputRef = useRef(0);
const resultRef = useRef(0);
function plus(e){
 e.preventDefault();
 let d = Number(inputRef.current.value)
  setresult((result)=>result+d);
 
}
function minus(e){
  let d= Number(inputRef.current.value);
  e.preventDefault();
   setresult((result)=>result>d? result=result-d:result=d-result);
   
 }
 function divide(e){

  let d= Number(inputRef.current.value);

  e.preventDefault();
   setresult((result)=>
   d===0
   ?alert('undefined')
   : result===0
   ?result=result+d
   :result=result/d





   );
   
 }
 function mult(e){
     
  let d= Number(inputRef.current.value);

  e.preventDefault();
   setresult((result)=>
  
 result===0
 ?result=result+d
 :result=result*d





   );
   
 }
 function resetResult(e){
     e.preventDefault();
  setresult(result=>result=0)
}
function resetInput(e)
      {
        e.preventDefault();
       inputRef.current.value=0;
      }

    return <div>
      <h1>calculator</h1>
    <p ref={resultRef}>{result}</p>
    <form>
   <input pattern="[0-9]" type='number' placeholder="Type a number" ref={inputRef}/>
   <button onClick={plus}>Add</button>
   <button onClick={minus}>minus</button>
   <button onClick={mult}>Times</button>
   <button onClick={divide}>Divide</button>
   <button onClick={resetInput}>Reset Input</button>
   <button onClick={resetResult}>Reset Result</button>

    </form>
    </div>
}

export default App;
