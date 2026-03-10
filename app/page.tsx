import { Shield } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative min-h-screen bg-slate-900 overflow-hidden pt-24">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-indigo-500/20 blur-[180px] rounded-full"></div>

     

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-16 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <div className="flex flex-col items-start gap-8 w-full max-w-[672px]">
          <span className="text-xs bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full">
            NOW IN BETA
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
            Your Secure <br />
            <span className="text-indigo-400">Code</span>
            <br />
            <span className="text-indigo-500">Companion</span>
          </h1>

          <p className="text-slate-400 text-lg max-w-xl">
            Save, organize, and share your code snippets effortlessly with our
            lightning-fast vault built for modern developer workflows.
          </p>

          <div className="flex gap-4">
            <button className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-lg text-white font-medium">
              Get Started Free →
            </button>

            <button className="border border-slate-600 px-6 py-3 rounded-lg text-slate-200 hover:border-slate-500">
              View Demo
            </button>
          </div>

          <div className="flex items-center gap-3 text-slate-400 text-sm">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-slate-700 rounded-full"></div>
              <div className="w-8 h-8 bg-slate-700 rounded-full"></div>
              <div className="w-8 h-8 bg-slate-700 rounded-full"></div>
            </div>
            Trusted by 10,000+ developers
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex items-center justify-center">
          {/* background glow */}
          <div className="absolute  w-[420px] h-[420px] bg-indigo-500/20 blur-[120px] rounded-full"></div>

          {/* main code window */}

          <Image
            src={"/Code.png"}
            className="hidden lg:flex"
            alt="Code"
            width={500}
            height={100}
          />
          <div className="absolute left-0 bottom-4 border border-white/10 rounded-md bg-white/5 p-2 flex gap-4 items-center justify-start m-4">
            {/* Shield Icon */}
            <div
              className="border rounded-full w-8 h-8 p-2 flex justify-center items-center"
              style={{
                backgroundColor: "rgba(60, 131, 246, 0.1)",
                color: "rgba(60, 131, 246, 1)",
                borderColor: "rgba(60, 131, 246, 0.8)",
              }}
            >
              <Shield />
            </div>

            {/* Text Content */}
            <div className="text-[10px] text-slate-400 flex flex-col">
              <span>Encrypted</span>
              <span>AES-256 Protocol</span>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Row */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-20 pb-16 border-t border-slate-800 pt-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-slate-400 text-sm">
        <div>⚡ Ultra Fast</div>
        <div>🔒 End-to-End</div>
        <div>👥 Team Ready</div>
        <div>☁ Cloud Sync</div>
      </div>
    </section>
  );
}
