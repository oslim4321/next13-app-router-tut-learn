import { Button, ImageComp } from "@/components/util";
import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <h1 className="text-2xl capitalize">{params.category}</h1>
      {/* first */}
      <div className="categoryList flex justify-between w-full ">
        <div className="w-[50%]">
          <h1 className="text-[50px]">Creation Porfolio</h1>
          <p className="text-[20px]">Desc</p>
          <Button text="See more" />
        </div>
        <div className="w-[50%]">
          <ImageComp src="/images/hero.png" className={"w-full"} />
        </div>
      </div>
    </div>
  );
};

export default page;
