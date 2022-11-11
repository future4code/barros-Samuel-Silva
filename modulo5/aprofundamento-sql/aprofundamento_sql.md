# _AULA - BANCO DE DADOS E INTRODUÇÃO A SQL_  
## **Tabela Actor**

## EXERCICIO 1

```sh
CREATE TABLE Actor(
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
SELECT * FROM `jbl-4416561-samuel-silva`.Actor;
SHOW DATABASES;
SHOW TABLES;
DESCRIBE Actor;
```

- a) Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar 
um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query. 
>R: id recebe strings de até 255 caracteres de valor único na tabela/ name(não pode ter este nome, pois "name" é uma 
palavra chave) recebe strings de até 255 caracteres sem preenchimento obrigatório / salary recebe um valor numério 
sem preenchimento obrigatório / birth_date recebe uma data no formato yyyy/mm/dd sem preenchimento obrigatório / 
gender recebe strings de até 6 caracteres sem preenchimento obrigatório
- b) O comando SHOW é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: 
SHOW DATABASES e SHOW TABLES. Explique os resultados.
>R: SHOW DATABASES mostra as insormações do seu banco de dados. SHOW TABLES mostra suas tabelas criadas
- c) O comando DESCRIBE pode ser usado para ver estrutura de uma tabela. Utilize o comando  DESCRIBE Actor e explique os resultados.
>R: O DESCRIBE mostra a tabela com todos os parametros de cada registro
## EXERCICIO 2

```sh
INSERT INTO Actor (id,name,salary,birth_date,gender)
VALUES("001", "Tony Ramos",400000,"1948-08-25","male"),
```

- a) Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963
```sh
 	("002","Gloria Pires",1200000,"1963-08-23","female"),
```

- b) Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.
>R: O campo id é PRIMARY KEY, ou seja, tem valor único.
```sh
 	("002","Lima Duarte",2222200,"1937-10-01","male");
```
- c) 
```sh
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
>R: Falta declarar as colunas "bith_date" e "gender"
- d)
```sh
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
```
>R: No campo "name" foi informado um valor fora do tipo requisitado
- e)
```sh
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
```
>R: Falta "" no valor de "birth_date"
- f) Por fim, crie mais um ator e mais uma atriz e prossiga para os próximos exercícios.

```sh
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Gloria Menezes",
  398945,
  1921-03-16, 
  "female"
)
(
  "007", 
  "Antonio Fagundes",
  1354650,
  1929-12-26, 
  "male"
);
```
## EXERCICIO 3

- a) Escreva uma query que retorne todas as informações das atrizes
```sh
SELECT * from Actor WHERE gender = "female";
```
- b) Escreva uma query que retorne o salário do ator com o nome Tony Ramos
```sh
SELECT salary from Actor WHERE name = "Tony Ramos";
```

- c) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.
```sh
SELECT * from Actor WHERE gender = "invalid";
```
>R: Não existe nenhum registro com o valor "invalid" no campo "gender"
- d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000
```sh
SELECT id, name, salary from Actor WHERE salary < 500000;
```

- d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000
```sh
SELECT id, name, salary from Actor WHERE salary < 500000;
```

- e) Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta
```sh
SELECT id, nome from Actor WHERE id = "002"
```
>R: A coluna "nome" não existe na tabela
```sh
SELECT id, name from Actor WHERE id = "002"
```
## EXERCICIO 4
```sh
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
```
- a) Explique com as suas palavras a query acima
>R: Mostre todo conteúdo da tabela Actor, quando o campo "name" contiver "A" ou "J" e o campo "salary" for maior que 30000.
- b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00
```sh
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND (salary > 350000);
```

- c) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.
```sh
SELECT * FROM Actor
WHERE (name LIKE "%g%") OR (name LIKE "%G%");
```

- d) Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00
```sh
SELECT * FROM Actor WHERE 
	(name LIKE "%g%") OR (name LIKE "%G%") OR (name LIKE "%a%") OR (name LIKE "%A%") AND (salary BETWEEN 350000 AND 900000);
```
## **Tabela Films**

## EXERCICIO 5


```sh
CREATE TABLE Films (
id VARCHAR(50) PRIMARY KEY,
name VARCHAR(100),
synopsis TEXT NOT NULL,
date_release DATE NOT NULL,
evaluation INT NOT NULL
);
```

- a) Escreva a query que cria essa tabela. Para sinopse, utilize o tipo TEXT, pesquise sobre ele se precisar. 
Explique a query resumidamente.
>R: A diferença entre VARCHAR e TEXT, é qu este último não tem limite de tamanho.
Crie 4 filmes com as seguintes informações: 
- b) c) d)

```sh
INSERT INTO Films (id, name, synopsis, date_release, evaluation)
VALUES("001","Se Eu Fosse Você","Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos","2006-01-06","7"),
	("002","Doce de mãe","Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela","2012-12-27","10"),
	("003","Dona Flor e Seus Dois Maridos","Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.","2017-11-02","8"),
```
- e)
```sh
	("004","O Auto da Compadecida","João Grilo e Chicó são dois amigos se metem em várias confusões pelo sertão da Paraíba","2000-09-15","10");
```

## EXERCICIO 6
- a) Retorne o id, título e avaliação a partir de um id específico;

```sh
SELECT id, name, evaluation FROM Films WHERE id="003";
```

- b) Retorne um filme a partir de um nome específico;

```sh
SELECT * FROM Films WHERE name="Doce de mãe";
```
- c) Retorne o id, título e sinopse dos filmes com avaliação mínima de 7

```sh
SELECT id, name, synopsis FROM Films WHERE evaluation>=7;
```

## EXERCICIO 7

- a) Retorna um filme cujo título contenha a palavra vida

```sh
SELECT * FROM Films WHERE name LIKE "%vida%";
```

- b) Realize a pesquisa de um filme, ou seja: pesquise se o 
termo de busca está contido no título ou na sinopse. Utilize qualquer TERMO DE BUSCA para exemplificar.

```sh
SELECT * FROM Films WHERE name LIKE "%vida%" OR synopsis LIKE "%vida%";
```

- c) Procure por todos os filmes que já tenham lançado

```sh
SELECT * FROM Films WHERE date_release > "0001-01-01";
```

- d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse
e com a avaliação maior do que 7

```sh
SELECT * FROM Films WHERE (date_release > "0001-01-01") AND 
(name LIKE "%vida%" OR synopsis LIKE "%vida%") AND
(evaluation>7);
```
# _AULA - APROFUNDAMENTO SQL_ 
## **Tabela Actor**

## EXERCICIO 1
- a) 
```sh
ALTER TABLE Actor DROP COLUMN salary;
```
>R: Exclui a coluna salary da tabela Actor

- b) 
```sh
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
> R: Altera o nome da coluna gender para sex com tipo VARCHAR e tamanho 6

- c) 
```sh
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```
> R: Altera o tamanho da coluna gender para 255 e mantendo o mesmo nome.

- d) Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres
```sh
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```
## EXERCICIO 2

- a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003
```sh
UPDATE Actor SET name="Fernanda Montenegro Alterada",  birth_date="1941-12-31"  WHERE id="003";
```

- b) Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior.
```sh
UPDATE Actor SET name="JULIANA PAES" WHERE id="005";
UPDATE Actor SET name="Juliana Paes" WHERE id="005";
```
- c) Escreva uma query que atualize todas as informações do ator com o id 005
```sh
UPDATE Actor SET id="010", name="Juliana Paes Silva", salary=9999, birth_date="1980-04-25", gender="male" WHERE id="005";
```

- d) Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.
```sh
UPDATE Actor SET name="Raul Gazola" WHERE id="099";
```
> R: A query roda, porém não acontece nenhuma alteração na tabela.

## EXERCICIO 3

- a) Escreva uma query que apague a atriz com o nome Fernanda Montenegro
```sh
DELETE FROM Actor WHERE name="Fernanda Montenegro Alterada";
```
- b) Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00
```sh
DELETE FROM Actor WHERE gender="male" AND salary>1000000;
```

## EXERCICIO 4

- a) Escreva uma query que pegue o maior salário de todos os atores e atrizes
```sh
SELECT MAX(salary) FROM Actor;
```

- b) Escreva uma query que pegue o menor salário das atrizes
```sh
SELECT MIN(salary) FROM Actor WHERE gender="female";
```
- c) Escreva uma query que pegue a quantidade de atrizes
```sh
SELECT COUNT(*) FROM Actor WHERE gender="female";
```
- d) Escreva uma query que pegue a soma de todos os salários
```sh
SELECT SUM(salary) FROM Actor;
```

## EXERCICIO 5

```sh
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
```
- a) Releia a última query. Teste-a. Explique o resultado com as suas palavras
> R: A query agrupa os registros de cada couluna gender em comum e depois soma o número de ocorrências

- b) Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética
```sh
SELECT id, name FROM Actor WHERE gender="male" ORDER BY name DESC;
```
- c) Faça uma query que retorne todas as pessoas atoras ordenados pelo salário
```sh
SELECT * FROM Actor ORDER BY salary ASC;
```
- d) Faça uma query que retorne as pessoas atoras com os três maiores salarios
```sh
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
```
- e) Faça uma query que retorne a média de salário por gênero
```sh
SELECT AVG(salary) FROM Actor GROUP BY gender;
```

## **Tabela Movie**

## EXERCICIO 6

- a) Altere a tabela de Movies e adicione um novo parâmetro: playing_limit_date que indique a data limite em que o filme será passado no cinema. 
```sh
ALTER TABLE Movie ADD COLUMN playing_limit_date DATE;
```

- b) Altere a tabela de Movies para que o parâmetro avaliação torne-se rating e possa aceitar valores não inteiros, como, por exemplo, uma avaliação 8.5.
```sh
ALTER TABLE Movie CHANGE evaluation rating FLOAT;
```

- c) Atualize dois filmes de tal forma que tenhamos um  ainda esteja em cartaz, e outro que já tenha saído
```sh
UPDATE Movie SET playing_limit_date="2022-12-25" WHERE id="001";
UPDATE Movie SET playing_limit_date="2022-09-11" WHERE id="002";
```

- d) Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.
```sh
DELETE FROM Movie WHERE id="003";

UPDATE Movie SET synopsis="Este filme foi deletado" WHERE id="003";
```
> R: 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
Nada foi alterado na tabela, pois o registro não existe.
