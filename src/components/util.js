import Image from "next/image";

export const ImageComp = ({ src, width, height, className, alt }) => {
  return (
    <Image
      src={src}
      width={"500" || width}
      height={"500" || height}
      className={className}
      alt={alt || "image"}
    />
  );
};

export const Button = ({ text, className }) => {
  return (
    <button
      className={`px-10 py-5 cursor-pointer bg-[#53c28b] border-0 rounded text-white ${className}`}
    >
      {text}
    </button>
  );
};
