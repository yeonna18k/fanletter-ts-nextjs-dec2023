"use client";
import React, { useState } from "react";
import Link from "next/link";
import { auth, onSignupHandler } from "@/api/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const user = auth.currentUser;
  // console.log(user);

  const onLoginHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, pw);
      console.log(userCredential);
      setEmail("");
      setPw("");
    } catch (error) {
      console.log("error =>", error);
    }
  };

  return (
    <div className="flex items-center h-screen">
      <form className="bg-red-300 w-[500px] h-[300px] mx-auto p-[30px] ">
        <div className="mb-10">
          <label htmlFor="email">Email</label>
          <input
            className="float-end w-4/5 p-2"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-10">
          <label htmlFor="password">Password</label>
          <input
            className="float-end w-4/5 p-2"
            id="password"
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button
          className="w-full bg-red-50 py-1.5 my-5"
          onClick={(e) => onLoginHandler(e)}
        >
          Log In
        </button>
        <button
          className="w-full bg-red-50 py-1.5"
          onClick={(e) => onSignupHandler(e)}
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Login;
