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
  const [remember, setRemember] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <section className="relative min-h-screen bg-slate-900 overflow-hidden flex items-center justify-center px-6">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-indigo-500/20 blur-[180px] rounded-full"></div>

      {/* Login Form */}
      <div className="relative w-full max-w-md bg-[#1A1D21]/90 backdrop-blur-xl border border-[#2C2F36] rounded-3xl p-8 shadow-xl">

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-white text-2xl font-semibold mb-1">
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
              className="w-full bg-[#25292F] border border-[#33373E] rounded-xl pl-10 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40"
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
              className="w-full bg-[#25292F] border border-[#33373E] rounded-xl pl-10 pr-10 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40"
            />

            <button
              onClick={() => setShowPassword(!showPassword)}
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
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
            className="w-4 h-4 accent-indigo-500"
          />
          <span className="text-slate-300 text-sm">
            Remember me for 30 days
          </span>
        </div>

        {/* Sign In */}
        <button className="w-full bg-indigo-500 hover:bg-indigo-600 transition text-white py-3 rounded-xl flex items-center justify-center gap-2 mb-4">
          <FiLogIn />
          Sign In
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px bg-slate-700"></div>
          <span className="text-slate-400 text-sm">OR Continue with</span>
          <div className="flex-1 h-px bg-slate-700"></div>
        </div>

        {/* GitHub */}
        <button className="w-full bg-[#25292F] border border-[#33373E] hover:bg-[#2F353E] text-white py-3 rounded-xl flex items-center justify-center gap-3">
          <Image src={Github} alt="github" className="w-5 h-5" />
          GitHub
        </button>
      </div>
    </section>
  );
};

export default LoginPage;