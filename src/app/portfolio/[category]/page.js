import { Button, ImageComp } from "@/components/util";
import React from "react";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];
  if (data) {
    return data;
  }
  return notFound();
};
const page = ({ params }) => {
  const data = getData(params.category);
  console.log(data);
  return (
    <div>
      <h1 className="text-2xl capitalize">{params.category}</h1>
      {/* first */}
      {data.map((elem) => (
        <div className="categoryList flex justify-between w-full my-10">
          <div className="w-[50%]">
            <h1 className="text-[50px]">{elem.title}</h1>
            <p className="text-[20px]">{elem.desc}</p>
            <Button text="See more" />
          </div>
          <div className="w-[50%]">
            <ImageComp src={elem.image} className={"w-full"} alt={elem.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
