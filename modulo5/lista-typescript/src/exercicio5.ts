console.log("EXERCICIO 5:")

const listUser:User[] =  [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

type User = {
    name:string,
    email:string,
    role:string
}


function adminUser (item:User) {
    return (item.role === "admin")
}
const listAdmin:User[] = listUser.filter(adminUser)

const listAdminMap:void[] = listAdmin.map(emails)

function emails (itenEmail:any) {
    console.log(itenEmail.email)
}
