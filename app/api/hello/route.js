
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    status: 'success',
    message: 'TechHive API is working',
    features: [
      'Pi SDK Integration',
      'AI Recommendations',
      'Digital Services Marketplace'
    ]
  });
}
