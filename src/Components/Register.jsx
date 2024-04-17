import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

export default function Register() {
  return (
    <div className="bg-white px-20 py-20 border-2 border-gray-200 rounded-3xl">
      <h1 className="text-5xl font-semibold text-center">Sign Up</h1>
      <div className="mt-8">
        <div>
          <label className="text-lg font-medium flex items-center gap-2">
            <FaUser />
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full border-2 border-gray-100 p-4 m-1 rounded-xl bg-transparent"
          />
        </div>
        <div>
          <label className="text-lg font-medium flex items-center gap-2">
            <MdEmail />
            Email
          </label>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full border-2 border-gray-100 p-4 m-1 rounded-xl bg-transparent"
          />
        </div>
        <div>
          <label className="text-lg font-medium flex items-center gap-2">
            <FaLock />
            Password
          </label>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full border-2 border-gray-100 p-4 m-1 rounded-xl bg-transparent"
          />
        </div>
        <div>
          <label className="text-lg font-medium flex items-center gap-2">
            <FaLock />
            Comfirm Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border-2 border-gray-100 p-4 m-1 rounded-xl bg-transparent"
          />
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all text-white bg-blue-800 text-lg font-bold py-3 rounded-xl">
            Register
          </button>
        </div>
        <div className="mt-3">
          <p className="text-base text-gray-600 font-medium">
            If you have already account,{" "}
            <Link to="/signin" className="underline text-blue-800">
              Pls Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
