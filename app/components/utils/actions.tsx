'use server'

import { Resend } from "resend";

export interface emailData {
    fullname:string;
    email:string;
    message:string;
}

 
export async function createOportunity({
    fullname,email,message
}:emailData) {

    const resend = new Resend(process.env.RESEND_API_KEY);
    
    try{
        const { data } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'gab.webdesign@gmail.com',
            subject:'Nueva Opotunidad',
            html:`<html>
            <body style={main}>
              <div style={container}>
                <p style={paragraph}>Hola ${fullname},</p>
                <p>
                 Un nuevo contacto quiere saber de los servicios.
                </p>
                <ul style="list-style:none;">
                    <li>
                        Nombre: ${fullname}
                    </li>
                    <li>
                        E-mail: ${email}
                    </li>
                    <li>
                        Message: ${message}
                    </li>
                </ul>
                
              </div>
            </body>
          </html>`
        })
        console.log({data})
    } catch(error){
        console.error({error})
    }
}