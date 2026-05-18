// app/api/test/route.ts
import redis from '@/lib/redis'; // The @ refers to your project root
import { NextResponse } from 'next/server';

export async function GET() {
    // Write data
    await redis.set('my_app_status', 'Online');
    
    // Read data
    const status = await redis.get('my_app_status');
    
    return NextResponse.json({ status });
}