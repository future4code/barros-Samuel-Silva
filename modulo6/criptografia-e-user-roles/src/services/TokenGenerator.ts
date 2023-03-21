import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../model/user";

export class TokenGenerator {
  public generateToken = ({id, role}:AuthenticationData) => {

// EXERCICIO 1

// c)
// adicionado "role" como parametro
    const token = jwt.sign({ id, role }, process.env.JWT_KEY as string, {
      expiresIn: "1h",
    });
    return token;
  };

  public tokenData = (token: string): AuthenticationData => {
    const payload = jwt.verify(
      token,
      process.env.JWT_KEY as string
    ) as jwt.JwtPayload;

// EXERCICIO 1

//b)
// adicionado o "payload.role" como parametro
    return { id: payload.id as string, role:payload.role as string };
  };
}
