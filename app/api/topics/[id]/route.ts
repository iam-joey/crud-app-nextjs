import connectMongoDB from "@/lib/db";
import Topic from "@/models/topic";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: any) {
  await connectMongoDB();
  const { id } = params;

  const topic = await Topic.findById(id);

  return NextResponse.json({
    topic,
    msg: "successfylly fecthed",
  });
}

export async function DELETE(req: NextRequest, { params }: any) {
  await connectMongoDB();

  const { id } = params;
  console.log(id);
  let del = await Topic.deleteOne({
    _id: id,
  });

  return NextResponse.json(
    {
      del,
      msg: `Deleted ${id}`,
    },
    {
      status: 201,
    }
  );
}

export async function PUT(req: NextRequest, { params }: any) {
  await connectMongoDB();

  const { id } = params;

  const body = await req.json();

  const { title, description } = body;

  await Topic.updateOne({
    title,
    description,
  });

  return NextResponse.json(
    {
      msg: "All done",
    },
    {
      status: 201,
    }
  );
}
