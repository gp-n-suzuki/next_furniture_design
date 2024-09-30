import { ITEMS } from '@/constants/items';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { slug: string } }) {

    const item = ITEMS.find(item => item.id == parseInt(params.slug, 10))

    return NextResponse.json(item);
}