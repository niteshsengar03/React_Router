import React, {useState} from 'react';
import { Button } from './ui/button';
export default function Custom(){
    const [arr,setArr]=useState([]); 
    const[value,setValue]=useState(0);
    const Random =["This","is","a","random","array","of","strings"];
    return <div>
        <h1>Custom</h1>
        <input type='number' value={value} onChange={function(e){setValue(e.target.value)}}></input>
        <Button onClick={function(){
            const newArr = [];
            const len = Random.length;
            for(let i=0;i<value;i++){
            const random = Math.floor(Math.random()*len);
            newArr.push(Random[random]);
            }
            
            setArr(newArr);
        }}>Enter</Button>
        <Print arr={arr}/>
      
    </div>
}

function Print({arr}){
    return( 
        <div>
            {arr.join(" ") }
    </div>
    )
}