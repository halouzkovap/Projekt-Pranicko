import React,{useState,useEffect} from 'react';
import { render } from 'react-dom';
import Header from '../header';

const Ready=({data})=>{
    
    return(
        <>
        <Header title="Přáníčko je připravené"/>
       { console.log(data.id)}
      <p>{data.id}</p>
        </>
    )
}
export default Ready;