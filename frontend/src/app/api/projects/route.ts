import { NextResponse } from 'next/server';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';

// Aggressive caching: 30 minutes
export const revalidate = 1800;

export async function GET() {
  try {
    const response = await fetch(`${API_BASE_URL}/github/repos`, {
      next: { revalidate: 1800 }, // Cache for 30 minutes
      signal: AbortSignal.timeout(8000) // 8 second timeout
    });

    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }

    const data = await response.json();
    
    // Aggressive caching: 30 min cache, serve stale for 1 hour while revalidating
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=3600'
      }
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects', repos: [] },
      { status: 500 }
    );
  }
}
