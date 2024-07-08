import { GLOSSARY } from "@/constants/glossary";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json(GLOSSARY, { status: 200 });
}
