import React, { createContext, useContext, useState } from "react"
const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null)

  const login = (user) => {
    console.log("77777")
    console.log(userDetails)
    setUserDetails(user)
  }

  const logout = () => {
    setUserDetails(null)
  }

  return (
    <AuthContext.Provider value={{ userDetails, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

