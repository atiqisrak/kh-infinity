import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { secret } = await request.json();

    // Validate the secret
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    // Revalidate all paths
    const paths = [
      "/products",
      "/products/[slug]",
      "/blog",
      "/blog/[slug]",
      "/careers",
      "/careers/[id]",
      "/events",
      "/news",
      "/about",
    ];
    
    for (const path of paths) {
      revalidatePath(path);
    }
    
    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      paths,
    });
  } catch (err) {
    console.error("Revalidation error:", err);
    return NextResponse.json(
      { message: "Error revalidating all caches" },
      { status: 500 }
    );
  }
}

