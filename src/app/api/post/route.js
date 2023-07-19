import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    // fetch
    await connect();
    const posts = await Post.find();

    return new NextResponse(posts, { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("database error", error, { status: 500 });
  }
};
