import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between mx-20 gap-x-10 mt-8">
        <div>
          <h1 className="text-5xl text-center font-semibold text-indigo-500">
            Healthy Lifestyle
          </h1>
        </div>
        <div>
          <ul className="hidden gap-4  md:flex justify-center">
            <li>
              <Link
                to="/signin"
                className="text-base font-medium bg-blue-700 py-3 px-6 text-white rounded-lg active:scale-[1.04] duration-75 transition-all ease-out hover:text-blue-700 hover:bg-white"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="text-base font-medium bg-white py-3 px-6 text-blue-700 rounded-lg active:scale-[1.04] duration-75 transition-all ease-out hover:text-white hover:bg-blue-700"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
