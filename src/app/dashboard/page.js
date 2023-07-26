"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useState } from "react";

const Dashboard = () => {
  // const [data, setdata] = useState([]);
  // const [err, seterr] = useState(false);
  // const [loding, setloding] = useState(false);
  // async function getData() {
  //   setloding(true);
  //   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  //   try {
  //     if (!res.ok) {
  //       seterr(true);
  //     }
  //     const data = await res.json();
  //     setdata(data);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setloding(false);
  //   }
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  const session = useSession();
  console.log(session);
  return (
    <>
      <div className="text-white">
        {session.status === "loading" ? (
          "loading..."
        ) : session.status === "authenticated" ? (
          <p>{session.data.user.name}</p>
        ) : (
          "Hello Guest"
        )}
      </div>
      {/* {loding ? (
        <p>Loading...</p>
      ) : err ? (
        <p>Error Fetching data</p>
      ) : (
        data?.map((post) => <p key={post.id}>{post.title}</p>)
      )} */}
      <p>dashboard</p>
    </>
  );
};

export default Dashboard;
