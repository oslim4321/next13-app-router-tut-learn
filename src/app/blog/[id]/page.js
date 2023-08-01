import { ImageComp } from "@/components/util";
import React from "react";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`${process.env.BASE_URL}/api/post/${id}`);
  console.log(res);
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}
export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  console.log(post, "post");

  return {
    title: post?.title,
    description: post?.desc,
  };
}

const Blog = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <main className=" relative">
          <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative">
            <ImageComp
              src={data?.image}
              className="absoluted left-0 top-0 w-full h-full z-0 object-cover"
            />
            <div className="p-4 absoluted bottom-0 left-0 z-20">
              <a
                href="#"
                className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
              >
                Nutrition
              </a>
              <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                {data?.title}
              </h2>
              <div className="flex mt-3">
                <ImageComp
                  src={data?.image}
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-200 text-sm">
                    {" "}
                    Mike Sullivan{" "}
                  </p>
                  <p className="font-semibold text-gray-400 text-xs">
                    {" "}
                    14 Aug{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 lg:px-0 mt-12 text-gray-200 max-w-screen-md mx-auto text-lg leading-relaxed">
            <p className="pb-6">{data?.desc}</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Blog;
