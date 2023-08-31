import { useState, useEffect, useContext, createContext } from "react";
import auth from '.7'
const AuthContext = createContext();

export function AuthContextProvider(children) {


  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

export function UserAuth(){
    return useContext(AuthContext)
} 