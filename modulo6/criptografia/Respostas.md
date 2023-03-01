# _Criptografia_  

## EXERCICIO 1

a) O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?
>R: Round, ou cost é o "número de vezes" que o rash é rodado. Quanto maior o cost, maior a seguraça e o tempo para execução. Salt é uma sequencia aleatória de caratceres adicionados à senha

b)  Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por criptografar uma string usando o bcryptjs.
>R: NO CÓDIGO

c)  Agora, crie a função que verifique se uma string é correspondente a um hash, use a função compare do bcryptjs.
>R: NO CÓDIGO

<br>

## EXERCICIO 2

a) Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.
>R: Primeiro o cadastro e depois o login, pois o login vai usar o hash já armazenado durante o cadastrado para fazer a validação da senha.

b) Faça a alteração do primeiro endpoint.
>R: NO CÓDIGO

c) Faça a alteração do segundo endpoint.
>R: NO CÓDIGO

d) No exercício da aula anterior, nós criamos o endpoint user/profile. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.
>R: Não é necessário pois a hash já está armazenada no banco e já foi validada no login.
