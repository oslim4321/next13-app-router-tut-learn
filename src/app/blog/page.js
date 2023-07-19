import { ImageComp } from "@/components/util";
import Link from "next/link";
import React from "react";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className="cont my-10">
      {data.map((post) => (
        <Link
          href={`/blog/${post.id}`}
          className="flex items-center gap-x-5 border my-5"
          key={post.id}
        >
          <div>
            <ImageComp
              src="/images/contact.png"
              className={"w-[200px]"}
              alt={post.title}
            />
          </div>
          <div>
            <h2 className="text-3xl">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
