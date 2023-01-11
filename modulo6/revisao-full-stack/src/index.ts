import express from 'express';
import cors from "cors";
import ping from "./endpoints/ping";
import { createOrder } from './endpoints/createOrder';


	const app = express();

	app.use(express.json());
	app.use(cors());

	app.listen(3003,() => {
	    console.log("Servidor rodando na porta 3003");
    	})

// Teste		
app.get("/ping",ping );

// Cria Pedidos
app.post("/order",createOrder);