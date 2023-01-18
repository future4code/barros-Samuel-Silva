# Arquitetura de Software I 
---

## CRIAÇÃO DE TABELA - MySql

```sql
CREATE TABLE User_Arq(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL
);
```
---

## ENDPOINTS 

* ## Criar usuário
  * Método: POST
  * Path: `/createUser`
  * Body:
    * id (obrigatório)
    * name (obrigatório)
    * email (obrigatório)
    * password (obrigatório)

<br>  

* ## Apagar usuário pelo id
  * Método: DELETE
  * Path: `/:id`
  * Body de Resposta: (retornar um erro se não encontrar)
    * id
    
<br> 

* ## Listar todos usuários
  * Método: GET
  * Path: `/all`
    * Lista todos os usuários
  