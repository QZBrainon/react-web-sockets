import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import lfg from "../assets/lfg.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center  bg-slate-800">
      <h1 className="text-6xl mb-10 text-white font-bold">LFG CHAT</h1>
      <img src={lfg} alt="" />
      <form className="px-16 py-12 h-96 w-96 rounded-2xl shadow-lg bg-white text-center mt-5">
        <h1 className="text-6xl mb-10">Login</h1>
        <fieldset className="text-left mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full block rounded p-2 text-black outline-0"
          />
        </fieldset>
        <fieldset className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full block rounded p-2 text-black outline-0"
          />
          <button
            className="absolute top-2.5 right-2"
            onClick={(e) => {
              e.preventDefault();
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="black"
                class="w-4 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
          </button>
        </fieldset>
        <fieldset className="w-full rounded flex justify-between my-2 items-center">
          <label
            htmlFor="remember"
            className="text-sm flex justify-center items-center"
          >
            Remember me
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="ml-1 accent-black"
            />
          </label>
          <a href="#" className="text-slate-700 text-sm">
            Forgot password?
          </a>
        </fieldset>
        <button
          type="button"
          className="bg-slate-800 w-full p-2 mt-4 rounded-lg shadow text-sm text-white"
          onClick={() => navigate("/chat")}
        >
          Login
        </button>
      </form>
    </div>
  );
}
