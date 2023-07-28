"use client";
import { ImageComp } from "@/components/util";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();
  const [data, setdata] = useState([]);
  const [err, seterr] = useState(false);
  const [loding, setloding] = useState(false);
  console.log(session);
  async function getData() {
    setloding(true);
    const res = await fetch(`/api/post?username=${session?.data?.user?.name}`);
    try {
      if (!res.ok) {
        seterr(true);
      }
      const dataRes = await res.json();
      setdata(dataRes);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setloding(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (session.status === "loading") {
    return <p>Loading..</p>;
  }
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }
  if (session.status === "authenticated")
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
        {loding ? (
          <p>Loading...</p>
        ) : err ? (
          <p>Error Fetching data</p>
        ) : (
          <div className="flex flex-between gap-x-10">
            <div>
              {data?.map((post) => (
                <div key={post._id}>
                  <ImageComp src={post.image} alt={post.title} />
                  <p>{post.title}</p>
                  <p>{post.username}</p>
                  <p>{post.desc}</p>
                </div>
              ))}
            </div>
            <div>
              <SubmitForm />
            </div>
          </div>
        )}
        <p>dashboard</p>
      </>
    );
};

export default Dashboard;

/*  */

const SubmitForm = () => {
  const [data, setdata] = useState();
  function handleChange() {
    const name = e.target.name;
    const value = e.target.value;
    setdata({ data, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
  }
  return (
    <form action="" className="w-full" onSubmit={handleSubmit}>
      <h1 className="text-4xl text-center mb-5">Add New Post</h1>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="title"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-white"
          placeholder=" "
          required
          onChange={handleChange}
        />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Title
        </label>
      </div>
      {/* desc */}
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="desc"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-white"
          placeholder=" "
          required
          onChange={handleChange}
        />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Description
        </label>
      </div>
      {/* image */}
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="file"
          name="image"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-white"
          placeholder=" "
          required
          onChange={handleChange}
        />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Image
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="content"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-white"
          placeholder=" "
          required
          onChange={handleChange}
        />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Image
        </label>
      </div>
      {/* desc */}
      <div className="relative z-0 w-full mb-6 group">
        <button>Post</button>
      </div>
    </form>
  );
};
