import React, { useState } from 'react';
const HookCountertwo = () => {
    const initialCount=0
    const [count, setcount] = useState(initialCount);
  const  incrementByFive=()=>{
        for(let i=0; i<5;i++){
            setcount(preCount=>preCount+1)
        }
    }
    return ( 
        <div>
            Count : {count}
            <button onClick={()=>setcount(count+1)}>Increment</button>
            <button onClick={() => {
                setcount(count-1)
            }}>Decrement</button>
            <button onClick={incrementByFive}>Increment by 5</button>
        </div>
     );
}
 
export default HookCountertwo;