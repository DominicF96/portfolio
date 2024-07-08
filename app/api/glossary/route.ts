import { GLOSSARY } from "@/constants/glossary";

export async function GET(req: Request, res: any) {
  res.status(200).json(GLOSSARY);
}
