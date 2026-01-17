export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import { getCurrentUser } from "../../../../lib/auth/getCurrentUser";

export async function POST(req: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { userId } = await req.json();

  if (!userId || userId === currentUser.id) {
    return NextResponse.json({ message: "Invalid user" }, { status: 400 });
  }

  const existingConversation = await prisma.conversation.findFirst({
    where: {
      AND: [
        {
          participants: {
            some: { userId: currentUser.id },
          },
        },
        {
          participants: {
            some: { userId },
          },
        },
      ],
    },
    include: {
      participants: true,
    },
  });

  if (existingConversation) {
    return NextResponse.json(existingConversation);
  }

  const conversation = await prisma.conversation.create({
    data: {
      participants: {
        create: [{ userId: currentUser.id }, { userId }],
      },
    },
    include: {
      participants: true,
    },
  });

  return NextResponse.json(conversation, { status: 201 });
}

export async function GET() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const conversations = await prisma.conversation.findMany({
    where: {
      participants: {
        some: {
          userId: currentUser.id,
        },
      },
    },
    include: {
      participants: {
        include: {
          user: {
            select: {
              id: true,
              username: true,
              displayName: true,
              image: true,
            },
          },
        },
      },
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  return NextResponse.json(conversations);
}
