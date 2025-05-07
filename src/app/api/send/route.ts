import EmailTemplate from "../../_components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const response = await req.json();
  console.log(response);
  try {
    const { data, error } = await resend.emails.send({
      from: "justshareit@resend.dev",
      to: [response.emailToSend],
      subject: "File shared with you",
      react: EmailTemplate({ response }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
