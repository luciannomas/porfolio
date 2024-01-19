// import EmailTemplate from "../../ui/Email/page";
import {EmailTemplate} from '../../ui/Email/aux/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend('re_34HYgCBd_HBXTLjnkhqqvftGiRxG9m6yh'); //  process.env.RESEND_API_KEY

/* from: "Acme <onboarding@resend.dev>",
      to: ["luciano.mastran@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "lucano" }),
      text: "", 
      html:"<div> ola</div>",*/
export async function POST() {
    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'luciano.mastran@gmail.com',
            subject: 'ok3!!!',
            react: EmailTemplate({ firstName: "lucano" }),
            text:"",
    
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}