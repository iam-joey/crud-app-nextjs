import connectMongoDB from "@/lib/db";
import Topic from "@/models/topic";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  console.log("inside");
  await connectMongoDB();

  const { title, description } = await request.json();
  console.log(title, description);
  const topic = await Topic.create({
    title,
    description,
  });

  return NextResponse.json(
    {
      topic,
      msg: "Successfully created",
    },
    {
      status: 200,
    }
  );
}

export async function GET(req: NextRequest) {
  await connectMongoDB();

  const todos = await Topic.find();

  return NextResponse.json(
    {
      todos,
      msg: "Successfully fetched",
    },
    {
      status: 201,
    }
  );
}
