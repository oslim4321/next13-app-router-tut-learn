// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Portfolio = () => {
//   const portfolio = [
//     {
//       img: "/images/illustration.png",
//       title: "Illustration",
//       url: "illustrations",
//     },
//     {
//       img: "/images/websites.jpg",
//       title: "Website",
//       url: "websites",
//     },
//     {
//       img: "/images/apps.jpg",
//       title: "applications",
//       url: "illustrations",
//     },
//   ];
//   return (
//     <div className="cont py-10">
//       <p className="my-4 font-bold">Our Gallary</p>
//       <div className="flex gap-x-5">
//         {portfolio.map((elem) => (
//           <div key={elem.url}>
//             <Link href={`portfolio/${elem.url}`}>
//               <div className="w-[200px] h-[300px] p-4 border relative">
//                 <Image
//                   src={elem.img}
//                   width={500}
//                   height={500}
//                   alt={elem.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <span className="absolute text-3xl font-bold bottom-0">
//                   {elem.title}
//                 </span>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
