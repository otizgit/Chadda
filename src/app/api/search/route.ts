export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import { getCurrentUser } from "../../../../lib/auth/getCurrentUser";

export async function GET(req: Request) {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  if (!query || query.trim().length < 2) {
    return NextResponse.json([]);
  }

  const users = await prisma.user.findMany({
    where: {
      AND: [
        {
          id: { not: user.id },
        },
        {
          OR: [
            {
              username: {
                contains: query,
                mode: "insensitive",
              },
            },
            {
              displayName: {
                contains: query,
                mode: "insensitive",
              },
            },
          ],
        },
      ],
    },
    select: {
      id: true,
      username: true,
      displayName: true,
      image: true,
    },
    take: 10,
  });

  return NextResponse.json(users);
}
