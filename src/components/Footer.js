import React from "react";
import { ImageCom, ImageComp } from "./util";

const Footer = () => {
  return (
    <div className="flex justify-between items-center cont">
      <div>2023 sooto selim. All right reserve</div>
      <div className="flex items-center gap-x-5">
        <ImageComp
          erc=""
          src="/images/1.png"
          width={15}
          height={15}
          className="w-[30px]"
          alt="oslim facebook"
        />
        <ImageComp
          erc=""
          src="/images/2.png"
          width={15}
          className="w-[30px]"
          height={15}
          alt="oslim facebook"
        />
        <ImageComp
          erc=""
          src="/images/3.png"
          width={15}
          className="w-[30px]"
          height={15}
          alt="oslim facebook"
        />
        <ImageComp
          erc=""
          src="/images/4.png"
          width={15}
          className="w-[30px]"
          height={15}
          alt="oslim facebook"
        />
      </div>
    </div>
  );
};

export default Footer;
