import { SendMailData } from './../MailAdapter';
import { MailAdapter } from "../MailAdapter";
import nodemailer from "nodemailer";


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e7a65bb6f3f50e",
    pass: "3112aeb55c5ffa",
  },
});


export class NodemailerMailAdapter implements MailAdapter {
  async sendMail ({subject, body})}:SendMailData) {
    await transport.sendMail({
        from: "Equipe Feedget <oi@feedget.com>",
        to: "Juan Cassiano <juancassiano@hotmail.com>",
        subject,
        html: body,
      });
    
      return response.status(201).send();
    });
  }
}