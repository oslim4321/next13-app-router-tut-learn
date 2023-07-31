// import Post from "@/models/Post";
// import connect from "@/utils/db";
// import { NextResponse } from "next/server";

// export const GET = async (request) => {
//   const url = new URL(request.url);
//   const username = url.searchParams.get("username");
//   try {
//     // fetch
//     await connect();
//     console.log("connected");
//     const posts = await Post.find(username && { username });

//     return new NextResponse(JSON.stringify(posts), { status: 200 });
//   } catch (error) {
//     console.log(error);
//     return new NextResponse("database error", error, { status: 500 });
//   }
// };

// export const POST = async (request) => {
//   console.log("treq came in");
//   const body = await request.json();
//   try {
//     await connect();
//     console.log(body);
//     const newPost = Post.create(body);
//     return new NextResponse(JSON.stringify(newPost), { status: 201 });
//   } catch (error) {}
// };
