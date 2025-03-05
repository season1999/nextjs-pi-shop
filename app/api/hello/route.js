
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // In a real implementation, this would call an AI service like OpenAI
    // For now, we'll return a mock recommendation
    return NextResponse.json({
      recommendation: "Based on your profile, we recommend starting with our Web Design package and SEO Optimization to maximize your online presence. This combination provides the best ROI for new businesses.",
      services: [1, 3] // IDs of recommended services
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate recommendation' }, 
      { status: 500 }
    );
  }
}
