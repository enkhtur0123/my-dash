import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}

export async function PUT(request: NextRequest, context: RouteParams) {
  console.log(request);
  const { title, completed } = await request.json();

  const { id } = await context.params;

  const task = await prisma.task.update({
    where: { id },
    data: { title, completed },
  });

  return NextResponse.json(task);
}

export async function DELETE(request: NextRequest, context: RouteParams) {
  const { id } = await context.params;
  await prisma.task.delete({
    where: { id },
  });
  return NextResponse.json({ message: "Task deleted" });
}
