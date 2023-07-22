import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { id } = params;
  console.log(id);
  try {
    const post = await Post.findById(id);
    console.log(post);
    return new NextResponse(JSON.stringify(post), { status: 200 });
    // await connect();
  } catch (error) {
    return new NextResponse("database error");
  }
};
