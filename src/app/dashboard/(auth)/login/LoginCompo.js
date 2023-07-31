// import { signIn } from "next-auth/react";
// import React from "react";
// import { useState } from "react";

// const LoginCompo = () => {
//   const [data, setdata] = useState();
//   const handleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setdata({ ...data, [name]: value });
//   };
//   function handleSubmit(e) {
//     e.preventDefault();
//     const { email, password } = data;

//     signIn("credentials", { email, password });
//   }
//   return (
//     <div>
//       <div>
//         <section className="">
//           <div className="flex flex-col items-center justisfy-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//             <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//               <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//                 <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//                   Login to your account
//                 </h1>
//                 <form className="space-y-4 md:space-y-6" action="#">
//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                     >
//                       Your email
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       id="email"
//                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                       placeholder="name@company.com"
//                       onChange={handleChange}
//                       required=""
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="password"
//                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                     >
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       name="password"
//                       id="password"
//                       placeholder="••••••••"
//                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                       onChange={handleChange}
//                       required=""
//                     />
//                   </div>

//                   <button
//                     onClick={handleSubmit}
//                     className="w-full text-black border bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                   >
//                     Login
//                   </button>
//                 </form>
//                 <p>OR</p>
//                 <>
//                   <div className="my-10 text-black flex flex-col justify-center">
//                     {/* <div>Not signed in.</div> */}
//                     <button
//                       onClick={() => signIn("google")}
//                       className="border p-2"
//                     >
//                       Login with Google
//                     </button>
//                   </div>
//                 </>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default LoginCompo;
