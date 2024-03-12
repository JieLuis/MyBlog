import prisma from "@/prisma/client";
import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  prisma.user.findMany();
}
