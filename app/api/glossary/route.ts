import { GLOSSARY } from "@/constants/glossary";

export async function GET(req: Request) {}
export default async function handler(req: Request, res: any) {
  res.status(200).json(GLOSSARY);
}
