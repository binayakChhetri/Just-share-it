import EmailTemplate from "../../_components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { emailToSend, fileName, fileSize, fileType, url, sendTime } =
    await req.json();

  if (emailToSend) console.log(emailToSend);
  try {
    const { data, error } = await resend.emails.send({
      from: "justshareit@resend.dev",
      to: ["binayakchhetri1234@gmail.com"],
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

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
