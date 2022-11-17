# _AULA - RELAÇÕES EM SQL_  

## EXERCICIO 1

- a) Explique o que é uma chave estrangeira
>R: É um campo que faz relação à duas tabelas.

- b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes
```sh
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
```
```sh
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES ('001', 'Faltou emoção',7.5,'001' ),
		('002', 'Excelente',10,'002' ),
		('003', 'Bom filme, vou rever',9.5,'004' ),
		('004', 'Os atores poderiam ser melhores',8,'001' ),
		('005', 'Simplesmente fantástico',10,'004' );
 ```
 - c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.
 ```sh
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES ('006', 'Faltou emoção',7.5,'003');
```
 >R: ERROR Code 1452. Houve uma falha em uma restrição de chave, ou seja, não existe o id, portanto não é possível registrar.

- d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.
```sh
ALTER TABLE Movie DROP COLUMN rating;
```
- e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.
```sh
DELETE FROM Movie WHERE id='001';
```
>R: ERROR Code 1451. Não pode ser deletado, pois tem relação com a tabela Rating.

## EXERCICIO 2
```sh
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```

- a) Explique, com as suas palavras, essa tabela
>R: Esta tabela contém duas colunas onde recebem dados de duas tabelas diferentes através da FK.

- b) Crie, ao menos, 6 relações nessa tabela
```sh
INSERT INTO MovieCast (movie_id, actor_id) VALUES
('001','002'),
('002','004'),
('002','006'),
('004','002'),
('001','010'),
('004','004');
```
- c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query
```sh
INSERT INTO MovieCast (movie_id, actor_id) VALUES
('001','099');
```
>R: ERROR Code 1452. Houve uma falha em uma restrição de chave, ou seja, não existe o id, portanto não é possível registrar.

- d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query
```sh
DELETE FROM MovieCast WHERE actor_id='002';
```
>R: O registro foi apagado normalmente

## EXERCICIO3

```sh
SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```
- a) Explique, com suas palavras, a query acima. O que é o operador ON?
>R: Mostra todos os dados da tabela Movies juntamento com a Rating. O operdor ON impõe uma condição para retornar.

- b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.
```sh
SELECT name,Movie.id,rate FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id WHERE rate>1;
```
