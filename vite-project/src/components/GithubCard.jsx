import  { useEffect, useState } from 'react';
import { Button } from './ui/button';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  

export default function GithubCard(){

    const [value,setValue]=useState('');
    const[data,setData]=useState(null);

    return (
        <>
        <h1>GithubCard</h1>
        <input type='text' value={value} onChange={function(e){setValue(e.target.value)}}></input>
        <Button onClick ={function(){
             fetch(`https://api.github.com/users/${value}`).then(async function (res) {
            const json = await res.json();
            // data = json;
            // console.log(data);
            if(json.message === "Not Found"){
                alert("User not found");
                setData(null);
            }
            else{
                 setData(json);
            }
            console.log(data);
    });
        }} >Search</Button>
        {data ?(<Gitdisplay data={data}/>):null}
        
        </>
    )
}

function Gitdisplay({data}){

   console.log(data);
    return (
        <>
            <Card className="w-[350px] h-70">
          <CardHeader className="flex justify-between items-center">
          <div>
            <CardTitle className='inline-block'>{data.login}</CardTitle>
            <CardDescription className ='inline-block'>Welcome to my profile</CardDescription>
            </div>
            <img src={data.avatar_url} alt="avatar" className="w-20 h-20 rounded-full"/>
          </CardHeader>
          <CardContent>
            <p>{`followers:${data.followers}`}</p>
            <p>{`following:${data.following}`}</p>
            <a href='https://github.com/niteshsengar03'>Follow</a>
          </CardContent>
          <CardFooter>
          
          </CardFooter>
        </Card>
        </>
    )
}