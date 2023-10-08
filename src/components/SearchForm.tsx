import React, {useState, useEffect} from "react";
import {useSearchResults} from "hooks"
import { MainButton } from "ul/buttons";
import {useNavigate} from "react-router-dom"
import { TextField } from "ul/text-field";

function SearchForm() {
  
    const navigate= useNavigate()

    const results = useSearchResults() || []

    function handleSubmit(e){
        e.preventDefault()
        const query = e.target.query.value
        navigate("/search/"+query)
    }

  return (<div>
    <form onSubmit={handleSubmit}>
    <TextField name="query"></TextField>
    <MainButton>Button</MainButton>
    </form>
   
  </div>)
}

export {SearchForm};