import React from "react";
import css from "./index.css";

//recibe el value que tiene y los cambios

/* export function TextField({ value, onChange }) {
  return <input value={value} onChange={onChange} className={css.root}></input>;
} */


export function TextField(props) {
  return <input {...props} className={css.root}></input>;
}

//recibe todas las props y se la pasa al input (RIESGOSO, poner qué cosas recibe como props)