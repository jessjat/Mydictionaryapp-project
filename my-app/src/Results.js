import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props){
    if (props.results){
        return(
        <div className="Results">
        <h2>{props.results.word}</h2>
        {props.result.phonetics.map(function(phonetics, index){
            return(
                <div key={index}>
                    <Phonetic phonetic={phonetic}/>
                </div>    
            );
        })}
        {props.results.meanings.map(function(meaning,index){
           return(
            <div key={index}>
                <Meaning meaning={meaning}/>
                </div>
           ) 
        
        })}
        </div>);
    }else{
        return (
            null
            );
    }
    
       
    

}