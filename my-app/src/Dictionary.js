import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";



export default function Dictionary(){
    let [keyword,setKeyword]=useState("");
    let [results,setResults]=useState(null);

    function handleResponse(response){
    setResults(response.data[0]);

    }

 function search(event){
    event.preventDefault();
    
 }
 //documentation:http://dictionaryapi.dev/
 let apiUrl="https://api.dictionaryapi.dev/api/v2/entries/en/hello";
 axios.get(apiUrl).then(handleResponse);

 function handleKeywordChange(event){
  setKeyword(event.target.value);

 }

return (
    <div className="Dictionary">
    <form onSubmit={search}>
      <input type="search" onChange={handleKeywordChange} /> 
    </form>
    <Results results={Results}/>
    </div>
);

}