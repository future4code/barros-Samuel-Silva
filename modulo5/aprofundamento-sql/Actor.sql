USE `jbl-4416561-samuel-silva`;

-- EXERCICIO1
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

-- a) Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar 
-- um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query. 
-- R: id recebe strings de até 255 caracteres de valor único na tabela/ name(não pode ter este nome, pois "name" é uma 
-- palavra chave) recebe strings de até 255 caracteres sem preenchimento obrigatório / salary recebe um valor numério 
-- sem preenchimento obrigatório / birth_date recebe uma data no formato yyyy/mm/dd sem preenchimento obrigatório / 
-- gender recebe strings de até 6 caracteres sem preenchimento obrigatório

-- b) O comando SHOW é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: 
-- SHOW DATABASES e SHOW TABLES. Explique os resultados.
-- R: SHOW DATABASES mostra as insormações do seu banco de dados. SHOW TABLES mostra suas tabelas criadas

-- c) O comando DESCRIBE pode ser usado para ver estrutura de uma tabela. Utilize o comando  DESCRIBE Actor e explique os resultados.
-- R: O DESCRIBE mostra a tabela com todos os parametros de cada registro

-- EXERCICIO 2

INSERT INTO Actor (id,name,salary,birth_date,gender)
VALUES("001", "Tony Ramos",400000,"1948-08-25","male"),
	
-- a) Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963
		("002","Gloria Pires",1200000,"1963-08-23","female"),
   


-- b) Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.
-- R: O campo id é PRIMARY KEY, ou seja, tem valor único.

 	("002","Lima Duarte",2222200,"1937-10-01","male");

-- c) 

INSERT INTO Actor (id, name, salary)
VALUES( "003", "Fernanda Montenegro", 300000, "1929-10-19", "female");

-- R: Falta declarar as colunas "bith_date" e "gender"
-- d)

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES( "004", 400000, "1949-04-18", "male");

-- R: No campo "name" foi informado um valor fora do tipo requisitado
-- e)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES( "005", "Juliana Paes", 719333.33, 1979-03-26, "female");

-- R: Falta "" no valor de "birth_date"
-- f) Por fim, crie mais um ator e mais uma atriz e prossiga para os próximos exercícios.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES( "006", "Gloria Menezes", 398945, 1921-03-16, "female"),
( "007", "Antonio Fagundes", 1354650, 1929-12-26, "male");

-- EXERCICIO 3

-- a) Escreva uma query que retorne todas as informações das atrizes

SELECT * from Actor WHERE gender = "female";

-- b) Escreva uma query que retorne o salário do ator com o nome Tony Ramos

SELECT salary from Actor WHERE name = "Tony Ramos";

-- c) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.

SELECT * from Actor WHERE gender = "invalid";

-- R: Não existe nenhum registro com o valor "invalid" no campo "gender"
-- d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000

SELECT id, name, salary from Actor WHERE salary < 500000;

-- d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000

SELECT id, name, salary from Actor WHERE salary < 500000;

-- e) Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta

SELECT id, nome from Actor WHERE id = "002";

-- R: A coluna "nome" não existe na tabela

SELECT id, name from Actor WHERE id = "002";

-- EXERCICIO 4

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

-- a) Explique com as suas palavras a query acima
-- R: Mostre todo conteúdo da tabela Actor, quando o campo "name" contiver "A" ou "J" e o campo "salary" for maior que 30000.
-- b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00

SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND (salary > 350000);

-- c) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.

SELECT * FROM Actor
WHERE (name LIKE "%g%") OR (name LIKE "%G%");

-- d) Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00

SELECT * FROM Actor WHERE 
	(name LIKE "%g%") OR (name LIKE "%G%") OR (name LIKE "%a%") OR (name LIKE "%A%") AND (salary BETWEEN 350000 AND 900000);

SET SQL_SAFE_UPDATES = 0;

-- -------------- APROFUNDAMENTO SQL-------------------

-- a) 
ALTER TABLE Actor DROP COLUMN salary;
-- R: Exclui a coluna salary da tabela Actor

-- b) 
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
-- R: Altera o nome da coluna gender para sex com tipo VARCHAR e tamanho 6

-- c) 
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
-- R: Altera o tamanho da coluna gender para 255 e mantendo o mesmo nome.

-- d) Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

-- EXERCICIO 2

-- a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003
UPDATE Actor SET name="Fernanda Montenegro Alterada",  birth_date="1941-12-31"  WHERE id="003";

-- b) Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior.
UPDATE Actor SET name="JULIANA PAES" WHERE id="005";
UPDATE Actor SET name="Juliana Paes" WHERE id="005";

-- c) Escreva uma query que atualize todas as informações do ator com o id 005
UPDATE Actor SET id="010", name="Juliana Paes Silva", salary=9999, birth_date="1980-04-25", gender="male" WHERE id="005";

-- d) Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.
UPDATE Actor SET name="Raul Gazola" WHERE id="099";
-- R: A query roda, porém não acontece nenhuma alteração na tabela.

-- EXERCICIO 3

-- a) Escreva uma query que apague a atriz com o nome Fernanda Montenegro
DELETE FROM Actor WHERE name="Fernanda Montenegro Alterada";

-- b) Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00
DELETE FROM Actor WHERE gender="male" AND salary>1000000;

-- EXERCICIO 4

-- a) Escreva uma query que pegue o maior salário de todos os atores e atrizes
SELECT MAX(salary) FROM Actor;

-- b) Escreva uma query que pegue o menor salário das atrizes
SELECT MIN(salary) FROM Actor WHERE gender="female";

-- c) Escreva uma query que pegue a quantidade de atrizes
SELECT COUNT(*) FROM Actor WHERE gender="female";

-- d) Escreva uma query que pegue a soma de todos os salários
SELECT SUM(salary) FROM Actor;

-- EXERCICIO 5

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

-- a) Releia a última query. Teste-a. Explique o resultado com as suas palavras
-- R: A query agrupa os registros de cada couluna gender em comum e depois soma o número de ocorrências

-- b) Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética
SELECT id, name FROM Actor WHERE gender="male" ORDER BY name DESC;

-- c) Faça uma query que retorne todas as pessoas atoras ordenados pelo salário
SELECT * FROM Actor ORDER BY salary ASC;

-- d) Faça uma query que retorne as pessoas atoras com os três maiores salarios
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

-- e) Faça uma query que retorne a média de salário por gênero
SELECT AVG(salary) FROM Actor GROUP BY gender;

