import EmailTemplate from "../../ui/Email/page";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend('re_34HYgCBd_HBXTLjnkhqqvftGiRxG9m6yh'); //  process.env.RESEND_API_KEY

/* from: "Acme <onboarding@resend.dev>",
      to: ["luciano.mastran@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "lucano" }),
      text: "", */
export async function POST() {
    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'luciano.mastran@gmail.com',
            subject: 'llego8 !!!',
            react: EmailTemplate({ firstName: "lucano" }),
            html:"<div></div>",
            text:""
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}