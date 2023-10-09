import { prisma } from "@/utils/prismaGlobal";
import { NextResponse, NextRequest } from "next/server";

// Fetch all products
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  try {
    const products = await prisma.product.findMany({
      where: {
        ...(category ? { catSlug: category } : { isFeatured: true }),
      },
    });
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 },
    );
  }
}
