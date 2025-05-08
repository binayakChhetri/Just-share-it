import EmailTemplate from "../../_components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { emailToSend, fileName, fileSize, fileType, url, sendTime } =
    await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: "noreply@justshare.dev",
      to: emailToSend,
      subject: "File shared with you",
      react: EmailTemplate({
        fileName,
        fileSize,
        fileType,
        url,
        sendTime,
        emailToSend,
      }),
    });

    if (data) {
      console.log(data);
    }
    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
