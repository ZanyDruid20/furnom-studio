export async function GET() {
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';
  
  try {
    const response = await fetch(`${apiUrl}/health`, {
      method: 'GET',
      timeout: 10000
    });

    if (response.ok) {
      return Response.json({ 
        success: true, 
        message: 'Backend warmed up successfully',
        timestamp: new Date().toISOString()
      });
    } else {
      throw new Error(`Health check returned ${response.status}`);
    }
  } catch (error) {
    console.error('Cron warm-up failed:', error);
    return Response.json(
      { 
        success: false, 
        error: String(error),
        timestamp: new Date().toISOString()
      }, 
      { status: 500 }
    );
  }
}
