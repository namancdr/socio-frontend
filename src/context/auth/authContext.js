import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext()


export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const host = process.env.REACT_APP_HOST

        const [isAuthenticated, setIsAuthenticated] = useState(false)


        const createUser = async({name, username, email, password}) => {
            try {
                const response = await fetch(`${host}/api/auth/createuser`, {
                    method: 'POST', 
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({name, username, email, password})
                });
                const json = await response.json()
        
                if(json.success){
                    localStorage.setItem('token', json.authToken)
                    setIsAuthenticated(true)
                    console.log("User successfully created!")
                }else{
                    console.log({error: json.error})
                }
                
            } catch (error) {
                console.log(error)
            }
            
        }
        
        const loginUser = async({email, password}) => {
            try {
                const response = await fetch(`${host}/api/auth/login`, {
                    method: 'POST', 
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({email, password})
                });
                const json = await response.json()
        
                if(json.success){
                    localStorage.setItem('token', json.authToken)
                    setIsAuthenticated(true)
                    console.log('Logged in successfully')
                }else{
                    console.log({error: json.error})
                }
                
            } catch (error) {
                console.log(error)
            }
            
        }  

        useEffect(() => {
          
            if(localStorage.getItem('token')){
                setIsAuthenticated(true)
            }else{
                setIsAuthenticated(false)
            }
         
        }, [])
        
        

    const value={
        createUser,
        loginUser,
        isAuthenticated,
        setIsAuthenticated
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}