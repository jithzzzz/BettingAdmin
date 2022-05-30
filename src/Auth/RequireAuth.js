import { useAuth } from "./Auth"
import React from 'react'
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import SideMenu from "../Components/SideMenu/SideMenu";

export function RequireAuth({ children }) {
  const navigate = useNavigate()
  const auth = useAuth()
  console.log(auth?.userDetails)
  if (!auth?.userDetails) {
    return <Navigate to="/login" />
  }
  return (
    <>
      <Header key={auth?.userDetails} />
      <div className='container'>
        <SideMenu />
        <div className="otherpage">
          {children}
        </div>
      </div>
    </>
  )
}
