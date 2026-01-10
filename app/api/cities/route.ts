import { NextResponse } from 'next/server';
import { searchCities } from '@/lib/cities';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q');
  
  if (!q || q.length < 2) {
    return NextResponse.json([]);
  }
  
  try {
    const cities = await searchCities(q, 5);
    return NextResponse.json(cities);
  } catch (error) {
    console.error('City search error:', error);
    return NextResponse.json([], { status: 500 });
  }
}