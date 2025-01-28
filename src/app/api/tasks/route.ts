import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const tasks = await prisma.task.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(tasks);
}

export async function POST(request: Request) {
  const { title } = await request.json();
  const task = await prisma.task.create({
    data: { title },
  });
  return NextResponse.json(task);
}