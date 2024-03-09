import { NextResponse } from 'next/server';
import databaseConnect from './database';

export async function GET() {
  try {
    await databaseConnect();
    return NextResponse.json({ message: 'Espektro 24 API' });
  } catch (error) {}
}
