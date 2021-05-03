"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const nodemailer_1 = __importDefault(require("nodemailer"));
var transport = nodemailer_1.default.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: "teraoilers@gmail.com",
        pass: "y31$k?n9,"
    }
});
const teraMail1 = 'eduardo.cancellieri@teraoilers.com.ar';
const teraMail2 = 'horacion.mercado@teraoilers.com.ar';
const router = express_1.Router();
router.post("/api/sendMail", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, nombre, apellido, asunto, mensaje } = req.body;
        if (!email) {
            res.status(400).json({ title: 'ERROR!', message: 'Bad request. Missing email parameter' });
        }
        else if (!nombre) {
            res.status(400).json({ title: 'ERROR!', message: 'Bad request. Missing nombre parameter' });
        }
        else if (!apellido) {
            res.status(400).json({ title: 'ERROR!', message: 'Bad request. Missing apellido parameter' });
        }
        else if (!asunto) {
            res.status(400).json({ title: 'ERROR!', message: 'Bad request. Missing asunto parameter' });
        }
        else if (!mensaje) {
            res.status(400).json({ title: 'ERROR!', message: 'Bad request. Missing message parameter' });
        }
        else {
            var mailOptions = {
                from: `"${nombre} ${apellido}" <'${email}'>`,
                // to: `${teraMail1}, ${teraMail2}`,
                to: `elgabonqn@gmail.com`,
                subject: `${asunto}`,
                text: `${mensaje + "\n" + "\n" + 'Enviado por:' + "\n" + email}`,
            };
            yield transport.sendMail(mailOptions);
            res.status(200).json({});
        }
        return res;
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ title: "ERROR!", message: "Error durante el loggueo." });
    }
}));
exports.default = router;
