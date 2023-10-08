import React from "react";
import {Outlet} from "react-router-dom"
import { SearchForm } from "./SearchForm";

function Layout() {
  
  return (<div>
      <header style={{border:"solid 1px"}}>
      <SearchForm />
      </header>
      <Outlet></Outlet>
      <footer>soy el footer</footer>

  </div>)
}

export {Layout};