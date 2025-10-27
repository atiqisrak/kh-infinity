import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { secret } = await request.json();

    // Validate the secret
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    // Revalidate product pages
    revalidatePath("/products");
    revalidatePath("/products/[slug]", "page");
    
    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      tags: ["products"],
    });
  } catch (err) {
    console.error("Revalidation error:", err);
    return NextResponse.json(
      { message: "Error revalidating products" },
      { status: 500 }
    );
  }
}

