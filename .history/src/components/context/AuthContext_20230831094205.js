import { useState, useEffect, useContext, createContext } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useScrollTrigger } from "@mui/material";

const AuthContext = createContext();

export function AuthContextProvider(children) {
    const[]=useScrollTrigger
  return;
  <AuthContext.Provider>{children}</AuthContext.Provider>;
}

export function UserAuth() {
  return useContext(AuthContext);
}
