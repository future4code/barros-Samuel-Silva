import { Request, Response } from "express";
import { connection } from "../data/connection";
import getAddressInfo from "../services/getAddressInfo";
import { Address } from "../types";

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { cep, logradouro, numero, complemento, bairro, cidade, estado } = req.body;

    if (!cep || !logradouro || !numero || !cidade) {
      res.statusCode = 422;
      throw "'cep', 'logradouro', 'número' e 'cidade' são obrigatórios";
    }

    const id: string = Date.now().toString();
    const address = await getAddressInfo(cep);

    const newUser: Address = { id, cep, numero, complemento, bairro, cidade, estado };

    // await connection("aula_webservices_users").insert(newUser);

    // const send = await transporter.sendMail({
    //   from: process.env.NODEMAILER_USER,
    //   to: [email],
    //   subject: "Conta criada!",
    //   text: "Parabéns! Sua conta foi criada com sucesso!",
    // });

    // console.log(send);

    res.status(201).send("Usuário criado!");
  } catch (error: any) {
    console.log(error);
    if (typeof error === "string") {
      res.send(error);
    } else {
      console.log(error.sqlMessage || error.message);
      res.status(500).send("Ops! Um erro inesperado ocorreu =/");
    }
  }
}
