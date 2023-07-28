import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const url = new URL(request.url);
  // console.log(object)
  const username = url.searchParams.get("username");
  try {
    // fetch
    await connect();
    console.log("connected");
    const posts = await Post.find(username && { username });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("database error", error, { status: 500 });
  }
};
