import Image from "next/image";

export const ImageComp = ({ src, width, height, className }) => {
  return (
    <Image
      src={src}
      width={"500" || width}
      height={"500" || height}
      className={className}
    />
  );
};
