import express,{Request, Response} from "express"
import cors from 'cors'
import { products } from "./data"

const app = express()

app.use(express.json())

app.use(cors())

//EXERCICIO 1

app.get("/test", (req:Request, res:Response) => {          
    res.send("Server is running on port 3003")
})

//EXERCICIO 4

app.post("/addProducts",(req:Request,res:Response)=>{
   
    const newNameProduct = req.body.name
    const newPriceProduct = req.body.price
    
try{

    if(!newNameProduct || !newPriceProduct){
        const erro=new Error("Name or Price not given!");
        erro.name="Name or Price not given!";
        throw erro;
    }if (typeof newNameProduct != "string"){
        const erro=new Error("Name is not a string!");
        erro.name="Name is not a string!";
        throw erro;
    }if (isNaN(newPriceProduct)){
        const erro=new Error("Price is not a number!");
        erro.name="Price is not a number!";
        throw erro;
    }if (newPriceProduct <= 0){
        const erro=new Error("Price must be greater than 0 ");
        erro.name="Price must be greater than 0";
        throw erro;
    } else{
            products.push({
            id:Date.now().toString(),
            name:newNameProduct,
            price:newPriceProduct
        })
        res.status(200).send({products})
    
    }
}catch(e:any){

    switch(e.name){
    case "Name or price not given{":
        res.status(422).send(e.message);
        break;
    case "dataMusicNotFound":
        res.status(422).send(e.message);
        break;
    case "playlistNotFound":
        res.status(404).send(e.message);
        break;
    case "tracAreadyExist":
        res.status(409).send(e.message);
        break;
    default:
        res.status(500).send(e.message);
    }

    }
})

//EXERCICIO 5

app.get("/allProducts",(req:Request,res:Response)=>{
    res.status(200).send({products})
    })
    
//EXERCICIO 6

app.put("/changePrice/:id",(req:Request,res:Response)=>{
   
    const idProduct = req.params.id
    const changePrice = req.headers.price
    const newPrice = Number(changePrice)

try{

    if(!idProduct){
            const erro=new Error("Price not given!");
            erro.name="Price not given!";
            throw erro;
        }if (isNaN(newPrice)){
            const erro=new Error("Price is not a number!");
            erro.name="Price is not a number!";
            throw erro;
        }if (newPrice <= 0){
            const erro=new Error("Price must be greater than 0 ");
            erro.name="Price must be greater than 0";
            throw erro;
    }else {
        for(let i=0; i < products.length; i++){
            if(products[i].id === idProduct){
             products[i].price === Number(newPrice)
                
            }
        }
        res.status(200).send(products)
        console.log(newPrice)
    }
}catch(e:any){

    switch(e.name){
    case "Price not given!":
        res.status(422).send(e.message);
        break;
    case "Price is not a number!":
        res.status(500).send(e.message);
        break;
    case "Price must be greater than 0 ":
        res.status(500).send(e.message);
        break;
    default:
    }
        res.status(500).send(e.message);
    }
})

//EXERCICIO 7

app.delete("/delProduct",(req:Request, res:Response)=>{
    
    const idProduct = req.query.id 
    

    try{
        if(!idProduct){
                const erro=new Error("Product not found!");
                erro.name="Product not found!";
                throw erro;
    } else {

    let prodFiltered = products.find((prod)=>{
        return prod.id === idProduct
    })
    
    let productActual

    if(prodFiltered){
        productActual = products.filter((prod)=>{
            return prod.id !== idProduct
        })
        res.status(200).send(productActual)
        }
    }
    }catch(e:any){
        switch(e.name){
        case "Product not found!":
            res.status(422).send(e.message);
            break;
        default:
        }
        res.status(500).send(e.message);
    }
})
  
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
})
