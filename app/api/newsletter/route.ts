import client from "@sendgrid/client";
import { NextResponse } from "next/server";

// Vercel environment variables
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const SENDGRID_LIST_ID = process.env.SENDGRID_LIST_ID || "";
if (!SENDGRID_API_KEY) throw new Error("[SENDGRID_API_KEY] is required");
if (!SENDGRID_LIST_ID) throw new Error("[SENDGRID_LIST_IDS] is required");
client.setApiKey(SENDGRID_API_KEY);

export async function POST(req: Request) {
  const reqData: { email: string } = await req.json();
  const email = reqData.email;
  if (!email) {
    console.log(`No email provided to newsletter.`);
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }

  const url = "/v3/marketing/contacts";
  const data = {
    list_ids: [SENDGRID_LIST_ID],
    contacts: [{ email }],
  };
  try {
    const response = await client.request({ url, method: "PUT", body: data });
    console.log(`Email '${email}' subscribed to newsletter.`);
    return NextResponse.json(
      { status: "ok", message: "Subscribed", email },
      { status: 200 }
    );
  } catch (e: any) {
    if (e.code === 401) {
      const msg = { code: 401, message: "Maximum Limit Reached!" };
      console.log(`Unable to subscribe '${email}' to newsletter.`);
      return NextResponse.json(msg, { status: 401 });
    } else {
      const msg = { code: 400, message: e };
      console.log(`Unable to subscribe '${email}' to newsletter.`);
      return NextResponse.json(msg, { status: 400 });
    }
  }
}
