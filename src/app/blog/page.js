import { ImageComp } from "@/components/util";
import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <div className="cont my-10">
      <Link href="/blog/test" className="flex items-center gap-x-5 border">
        <div>
          <ImageComp src="/images/contact.png" className={"w-[200px]"} />
        </div>
        <div>
          <h2 className="text-3xl">Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            accusantium?
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
