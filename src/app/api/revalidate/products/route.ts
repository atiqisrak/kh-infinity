import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { pingSearchEngines } from "@/lib/search-ping";

export async function POST(request: NextRequest) {
  try {
    const { secret } = await request.json();

    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    revalidatePath("/products");
    revalidatePath("/products/[slug]", "page");
    revalidatePath("/imports");
    revalidatePath("/exports");
    revalidatePath("/sitemap.xml");

    const ping = await pingSearchEngines();

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      tags: ["products"],
      ping,
    });
  } catch (err) {
    console.error("Revalidation error:", err);
    return NextResponse.json(
      { message: "Error revalidating products" },
      { status: 500 }
    );
  }
}

