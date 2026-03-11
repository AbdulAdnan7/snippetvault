"use client";

import { FC, useState } from "react";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiLogIn,
} from "react-icons/fi";
import Image from "next/image";
import Github from "@/public/SVG.svg";

const LoginPage: FC = () => {
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="relative min-h-screen bg-slate-900 flex flex-col items-center justify-center overflow-hidden px-6 pt-20">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-indigo-500/20 blur-[180px] rounded-full"></div>

      {/* Logo */}
      <div className="relative z-10 flex flex-col items-center mb-8">
        <div className="w-10 h-10 rounded-xl bg-indigo-500 flex items-center justify-center text-white font-bold">
          <FiLogIn />
        </div>

        <h1 className="text-white font-semibold text-lg mt-3">
          SnippetVault
        </h1>

        <p className="text-slate-400 text-sm">
          Your secure code companion
        </p>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl">

        {/* Title */}
        <div className="mb-6">
          <h2 className="text-white text-xl font-semibold">
            Welcome back
          </h2>
          <p className="text-slate-400 text-sm">
            Enter your credentials to access your library.
          </p>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="text-slate-300 text-sm mb-2 block">
            Email Address
          </label>

          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />

            <input
              type="email"
              placeholder="name@example.com"
              className="w-full bg-transparent border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <label className="text-slate-300 text-sm">Password</label>

            <button className="text-indigo-400 text-sm hover:underline">
              Forgot password?
            </button>
          </div>

          <div className="relative">
            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              className="w-full bg-transparent border border-white/10 rounded-lg pl-10 pr-10 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        {/* Remember */}
        <div className="flex items-center gap-2 mb-6">
          <input
            type="checkbox"
            checked={remember}
            onChange={() => setRemember(!remember)}
            className="accent-indigo-500"
          />

          <span className="text-slate-400 text-sm">
            Remember me for 30 days
          </span>
        </div>

        {/* Sign In */}
        <button className="w-full bg-[#3C83F6] text-white py-3 rounded-lg font-medium hover:opacity-90 transition mb-6">
          Sign In
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px bg-white/10 flex-1"></div>
          <span className="text-slate-400 text-xs">
            OR CONTINUE WITH
          </span>
          <div className="h-px bg-white/10 flex-1"></div>
        </div>

        {/* Github Button */}
        <button className="w-full border border-white/10 bg-white/5 hover:bg-white/10 text-white py-3 rounded-lg flex items-center justify-center gap-3 transition">
          <Image src={Github} alt="github" className="w-5 h-5" />
          GitHub
        </button>
      </div>

      {/* Signup text */}
      <p className="text-slate-400 text-sm mt-6 relative z-10">
        Don't have an account?{" "}
        <span className="text-indigo-400 hover:underline cursor-pointer">
          Sign up for free
        </span>
      </p>

    </section>
  );
};

export default LoginPage;