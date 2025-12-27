"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-8 px-4">
        {/* Auth Card */}
        <div className="w-full max-w-[480px] border-3 border-gray-400 rounded-[30px] p-8 md:p-8 relative">
          {/* Toggle Switch */}
          <div className="flex justify-left mb-8">
            <div className="relative bg-white border rounded-full p-1 flex">
              <motion.div
                className="absolute top-1 bottom-1 left-1 rounded-full bg-black"
                style={{ width: "calc(50% - 4px)" }}
                animate={{ x: isLogin ? 0 : "100%" }}
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
              />
              <button
                onClick={() => setIsLogin(true)}
                className={`relative z-10 px-6 py-2 rounded-full text-sm font-serif transition-colors ${
                  isLogin ? "text-white" : "text-gray-600 hover:text-black"
                }`}
              >
                Log In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`relative z-10 px-6 py-2 rounded-full text-sm font-serif transition-colors ${
                  !isLogin ? "text-white" : "text-gray-600 hover:text-black"
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>

          {!isLogin ? (
            /* Sign Up Content */
            <div className="text-left">
              <h2 className="text-xs font-bold md:text-xl font-serif text-gray-600 mb-2">
                Welcome to Neha Rajput
              </h2>
              <p className="text-sm text-gray-600 mb-8 font-serif">
                Let's know you better and make sure that you never lose access
                to your account
              </p>

              <form className="space-y-3 text-left">
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label className="sr-only">First Name</label>
                    <input
                      type="text"
                      placeholder="First Name *"
                      className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black font-serif text-sm"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="sr-only">Last Name</label>
                    <input
                      type="text"
                      placeholder="Last Name *"
                      className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black font-serif text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only">Email Id / Mobile number</label>
                  <input
                    type="text"
                    placeholder="Email Id / Mobile number *"
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black font-serif text-sm"
                  />
                </div>

                <div className="relative">
                  <label className="sr-only">Password</label>
                  <input
                    type="password"
                    placeholder="Password *"
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black font-serif text-sm pr-12"
                  />
                  <button
                    type="button"
                    className="absolute right-0 top-2 text-xs font-semibold text-gray-600 hover:text-black"
                  >
                    Show
                  </button>
                </div>

                <div className="text-right">
                  <button
                    type="button"
                    className="text-xs font-medium text-gray-800 hover:underline"
                  >
                    Verify via OTP
                  </button>
                </div>

                <div className="flex  items-start gap-2 mt-4">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className=" w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
                  />
                  <label
                    htmlFor="newsletter"
                    className="text-sm font-medium text-gray-600 font-serif leading-tight"
                  >
                    I would like to receive the Newsletter
                  </label>
                </div>

                <button
                  type="button"
                  className="w-full bg-black text-white py-3 font-serif uppercase tracking-widest text-sm hover:bg-gray-900 transition-all mt-4"
                >
                  Create Account
                </button>
              </form>

              <p className="text-[13px] text-gray-400 mt-4 text-center">
                By continuing, I agree to AD{" "}
                <span className="font-bold text-gray-600">Privacy Policy</span>{" "}
                and{" "}
                <span className="font-bold text-gray-600">Terms of use</span>
              </p>
            </div>
          ) : (
            /* Login Content */
            <div className="text-left ">
              <p className="text-sm text-gray-600 mb-8 font-serif">
                To quickly find your favourite items, saved addresses and
                payments.
              </p>

              <form className="space-y-8 text-left">
                <div>
                  <label className="sr-only">Email Id / Mobile number</label>
                  <input
                    type="text"
                    placeholder="Email Id / Mobile number *"
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black font-serif text-sm"
                  />
                </div>

                <div>
                  <label className="sr-only">Password</label>
                  <input
                    type="password"
                    placeholder="Password *"
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black font-serif text-sm"
                  />
                </div>

                <button
                  type="button"
                  className="w-full bg-black text-white py-3 font-serif tracking-widest font-medium rounded-xl text-lg hover:bg-gray-900 transition-all mt-4"
                >
                  Login
                </button>

                <div className="text-center text-sm font-serif">
                  <span className="text-gray-600">Don't have an account? </span>
                  <button
                    onClick={() => setIsLogin(false)}
                    className="font-semibold text-black hover:underline"
                  >
                    Sign up
                  </button>
                </div>
              </form>

              <p className="text-[13px] text-gray-600 mt-8 text-center">
                By continuing, I agree to AD{" "}
                <span className="font-bold text-gray-600">Privacy Policy</span>{" "}
                and{" "}
                <span className="font-bold text-gray-600">Terms of use</span>
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
