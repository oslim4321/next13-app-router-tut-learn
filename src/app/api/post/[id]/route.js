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

export const DELETE = async (request, { params }) => {
  console.log(params, "delete");
  const { id } = params;
  try {
    await connect();
    await Post.findByIdAndDelete(id);
    console.log("item deleted");
    return new NextResponse("item deleted success");
  } catch (error) {
    console.log(error);
  }
};
