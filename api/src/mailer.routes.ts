import { Router, Request, Response } from "express";
import nodemailer from "nodemailer";
var transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: "teraoilers@gmail.com",
      pass: "y31$k?n9,"
    }
  });
const teraMail1 = 'eduardo.cancellieri@teraoilers.com.ar';
const teraMail2 = 'horacion.mercado@teraoilers.com.ar';
const router = Router();

router.post("/api/sendMail", async (req: Request, res: Response): Promise<Response> => {
    try {
        const { email, nombre, apellido, asunto, mensaje } = req.body;
        if (!email) {
            res.status(400).json({ title: 'ERROR!', message: 'Bad request. Missing email parameter'});
            
        } else if (!nombre) {
            res.status(400).json({ title: 'ERROR!', message: 'Bad request. Missing nombre parameter'});
            
        } else if (!apellido) {
            res.status(400).json({ title: 'ERROR!', message: 'Bad request. Missing apellido parameter'});
            
        } else if (!asunto) {
            res.status(400).json({ title: 'ERROR!', message: 'Bad request. Missing asunto parameter'});
            
        } else if (!mensaje) {
            res.status(400).json({ title: 'ERROR!', message: 'Bad request. Missing message parameter'});
        } else {
            var mailOptions = {
                from: `"${nombre} ${apellido}" <'${email}'>`,
                // to: `${teraMail1}, ${teraMail2}`,
                to: `elgabonqn@gmail.com`,
                subject: `${asunto}`,
                text: `${mensaje + "\n" + "\n" + 'Enviado por:' + "\n" + email}`,
            };
    
            await transport.sendMail(mailOptions);
            res.status(200).json({});
        }

        return res
    } catch (error) {
        console.log(error)
        return res.status(400).json({ title: "ERROR!", message: "Error durante el loggueo." });
    }
  }
);

export default router;
