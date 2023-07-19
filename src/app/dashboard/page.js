"use client";
import { useEffect } from "react";
import { useState } from "react";

const Dashboard = () => {
  const [data, setdata] = useState([]);
  const [err, seterr] = useState(false);
  const [loding, setloding] = useState(false);
  async function getData() {
    setloding(true);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    try {
      if (!res.ok) {
        seterr(true);
      }
      const data = await res.json();
      setdata(data);
    } catch (error) {
      console.log(error);
    } finally {
      setloding(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  return (
    <>
      {loding ? (
        <p>Loading...</p>
      ) : err ? (
        <p>Error Fetching data</p>
      ) : (
        data?.map((post) => <p>{post.id}</p>)
      )}
    </>
  );
};

export default Dashboard;
