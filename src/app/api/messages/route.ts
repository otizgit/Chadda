export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import { getCurrentUser } from "../../../../lib/auth/getCurrentUser";

export async function POST(req: Request) {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { conversationId, content } = await req.json();

  if (!conversationId || !content?.trim()) {
    return NextResponse.json({ message: "Invalid payload" }, { status: 400 });
  }

  const conversation = await prisma.conversation.findFirst({
    where: {
      id: conversationId,
      participants: {
        some: {
          userId: user.id,
        },
      },
    },
  });

  if (!conversation) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  const message = await prisma.message.create({
    data: {
      content,
      conversationId,
      senderId: user.id,
    },
  });

  return NextResponse.json(message, { status: 201 });
}

export async function GET(req: Request) {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const conversationId = searchParams.get("conversationId");

  if (!conversationId) {
    return NextResponse.json(
      {
        message: "Missing conversation",
      },
      { status: 400 },
    );
  }

  const conversation = await prisma.conversation.findFirst({
    where: {
      id: conversationId,
      participants: {
        some: { userId: user.id },
      },
    },
  });

  if (!conversation) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  const messages = await prisma.message.findMany({
    where: {
      conversationId,
    },
    orderBy: {
      createdAt: "asc",
    },
    include: {
      sender: {
        select: {
          id: true,
          username: true,
          image: true,
        },
      },
    },
    take: 50,
  });

  return NextResponse.json(messages);
}
