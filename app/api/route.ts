import { NextResponse } from "next/server";
import { ITEMS } from "@/constants/items";

export async function GET(request: Request) {

  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '10', 10);

  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedItems = ITEMS.slice(start, end);

  const totalPages = Math.ceil(ITEMS.length / limit);

  return NextResponse.json({ items: paginatedItems, totalPages: totalPages });
}