"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import LoginCompo from "./LoginCompo";

const Login = () => {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;

  if (status === "loading") {
    return <div className="my-10">Hang on there...</div>;
  }

  return (
    <>
      {status === "authenticated" ? (
        <div className="my-10">
          <div>Signed in as {userEmail}</div>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      ) : (
        <div className="mt-5">
          <LoginCompo />
        </div>
      )}
    </>
  );
};

export default Login;
