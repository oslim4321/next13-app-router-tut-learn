// "use client";

// import { signIn, signOut, useSession } from "next-auth/react";
// import React from "react";
// import LoginCompo from "./LoginCompo";
// import { useRouter } from "next/navigation";

// const Login = () => {
//   const { data: session, status } = useSession();
//   const userEmail = session?.user?.email;
//   const router = useRouter();

//   if (status === "loading") {
//     return <div className="my-10">Hang on there...</div>;
//   }

//   if (status === "authenticated") {
//     router?.push("/dashboard");
//   }

//   return (
//     <>
//       {status === "authenticated" ? (
//         <div className="my-10">
//           <div>Signed in as {userEmail}</div>
//           <button onClick={() => signOut()}>Sign out</button>
//         </div>
//       ) : (
//         <div className="mt-5">
//           <LoginCompo />
//         </div>
//       )}
//     </>
//   );
// };

// export default Login;
