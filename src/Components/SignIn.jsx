import React from 'react'
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="bg-white px-20 py-20 border-2 border-gray-200 rounded-3xl">
      <h1 className="text-5xl font-semibold text-center">Sign In</h1>
      <p className="font-medium text-lg text-gray-500 mt-4 text-center">
        Pls Enter your details
      </p>
      <div className="mt-8">
        <div>
          <label className="text-lg font-medium">Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full border-2 border-gray-100 p-4 m-1 rounded-xl bg-transparent"
          />
        </div>
        <div>
          <label className="text-lg font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border-2 border-gray-100 p-4 m-1 rounded-xl bg-transparent"
          />
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button className="font-medium text-base text-indigo-400">
            Forgot Password
          </button>
          <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all text-white bg-blue-800 text-lg font-bold py-3 rounded-xl">
            Sign In
          </button>
        </div>
        <div className="mt-3">
          <p className="text-base text-gray-600 font-medium">
            If you don't have an account,{" "}
            <Link to="/register" className="underline text-blue-800">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
