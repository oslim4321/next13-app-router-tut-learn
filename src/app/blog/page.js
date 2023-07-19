import { ImageComp } from "@/components/util";
import Link from "next/link";
import React from "react";

async function getData() {
  const res = await fetch("http://localhost:3000/api/post");

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  return res.json();
}

const Blog = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div className="cont my-10">
      {data.map((post) => (
        <Link
          href={`/blog/${post._id}`}
          className="flex items-center gap-x-5 border my-5"
          key={post.id}
        >
          {/* <div>
            <ImageComp
              src="/images/contact.png"
              className={"w-[200px]"}
              alt={post.title}
            />
          </div> */}
          <div>
            <h2 className="text-3xl">{post.title}</h2>
            <p>{post.content}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
