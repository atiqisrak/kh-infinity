import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { pingSearchEngines } from "@/lib/search-ping";

export async function POST(request: NextRequest) {
  try {
    const { secret } = await request.json();

    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    const paths = [
      "/products",
      "/products/[slug]",
      "/imports",
      "/exports",
      "/blog",
      "/blog/[slug]",
      "/careers",
      "/careers/[id]",
      "/events",
      "/news",
      "/about",
      "/faq",
      "/services",
      "/services/customs",
      "/services/trade-routes",
      "/services/sme-import-solutions",
    ];

    for (const path of paths) {
      revalidatePath(path);
    }
    revalidatePath("/sitemap.xml");

    const ping = await pingSearchEngines();

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      paths,
      ping,
    });
  } catch (err) {
    console.error("Revalidation error:", err);
    return NextResponse.json(
      { message: "Error revalidating all caches" },
      { status: 500 }
    );
  }
}

