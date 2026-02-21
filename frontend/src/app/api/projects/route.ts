import { NextResponse } from 'next/server';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';

// Aggressive caching: 30 minutes
export const revalidate = 1800;

// Retry logic with exponential backoff
async function fetchWithRetry(url: string, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url, {
        next: { revalidate: 1800 },
        signal: AbortSignal.timeout(15000) // 15 second timeout per attempt
      });

      if (response.ok) {
        return response;
      }

      // Don't retry on 4xx errors
      if (response.status >= 400 && response.status < 500) {
        throw new Error(`Client error: ${response.status}`);
      }
    } catch (error) {
      // Only retry on timeout or 5xx errors
      if (i === maxRetries - 1) throw error;
      
      // Wait before retrying (exponential backoff: 1s, 2s, 4s)
      const waitTime = Math.pow(2, i) * 1000;
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
  }
  throw new Error('Max retries reached');
}

export async function GET() {
  try {
    const response = await fetchWithRetry(`${API_BASE_URL}/github/repos`);
    const data = await response.json();
    
    // Serve from cache while revalidating in background
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
