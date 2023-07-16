import Image from "next/image";
import React from "react";

const about = () => {
  return (
    <div>
      <div className="cont">
        <div className="h-[50%]">
          <Image
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            // fill={true}
            width={500}
            height={500}
            alt=""
            className={"w-full h-full object-center"}
          />
          <div className={"bg-green-400 w-[50%]"}>
            <h1 className={""}>Digital Storytellers</h1>
            <h2 className={""}>
              Handcrafting award winning digital experiences
            </h2>
          </div>
        </div>
        <div className="flex h-[50%]">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default about;
