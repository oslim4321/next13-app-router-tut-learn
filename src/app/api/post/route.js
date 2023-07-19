import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    // fetch
    await connect();
    const posts = await Post.find(s);

    return new NextResponse(posts, { status: 200 });
  } catch (error) {
    return new NextResponse("database error", { status: 500 });
  }
};
