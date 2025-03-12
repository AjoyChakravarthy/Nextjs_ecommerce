import React from "react";
import Link from "next/link";

function Login() {
   return (
      <div className="w-[600px]  mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
         <h1 className="text-3xl font-bold text-center mb-4">Welcome User </h1>
         <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

         <form className="space-y-4">
            <div>
               <label className="block font-medium">Email</label>
               <input
                  type="email"
                  className="w-full p-2 border rounded"
               />
            </div>

            <div>
               <label className="block font-medium">Password</label>
               <input
                  type="password"
                  className="w-full p-2 border rounded"
               />
            </div>

            <button
               type="submit"
               className="w-full bg-slate-600 text-white py-2 rounded hover:bg-slate-700"
            >
               Login
            </button>
         </form>
         <div className="p-2">
            Don&apos;t have a account?{" "}
            <span className="text-blue-500">
               <Link href="/">Register</Link>
            </span>
         </div>
      </div>
   );
}

export default Login;
