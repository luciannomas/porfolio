// import EmailTemplate from "../../ui/Email/page";
import { EmailTemplate } from '../../ui/Email/aux/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend('re_34HYgCBd_HBXTLjnkhqqvftGiRxG9m6yh'); //  process.env.RESEND_API_KEY

/* from: "Acme <onboarding@resend.dev>",
      to: ["luciano.mastran@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "lucano" }),
      text: "", 
      html:"<div> ola</div>",*/

export async function POST(request) {
    const forma = await request.formData();
    const message = forma.get("message");
    const name = forma.get("name");
    const email = forma.get("email");

    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'luciano.mastran@gmail.com',
            subject: 'Contact us now!!!',
            react: EmailTemplate({ name,  message, email }),
            text: "",
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}