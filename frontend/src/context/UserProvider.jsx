import React, { createContext, useState } from 'react'

export const UserContext = createContext();

const UserProvider = ({children})=> {
    const[user, setUser] = useState({
        fullName:{
            firstName: '',
            lastName: ''
        },
        email: ''
    });
    
  return (
    <div>
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    </div>
  )
}

export default UserProvider;