USE `jbl-4416561-samuel-silva`;

CREATE TABLE Films (
id VARCHAR(50) PRIMARY KEY,
name VARCHAR(100),
synopsis TEXT NOT NULL,
date_release DATE NOT NULL,
evaluation INT NOT NULL
);

-- a) Escreva a query que cria essa tabela. Para sinopse, utilize o tipo TEXT, pesquise sobre ele se precisar. 
-- Explique a query resumidamente.
-- R: A diferença entre VARCHAR e TEXT, é qu este último não tem limite de tamanho.alter

-- Crie 4 filmes com as seguintes informações: 
-- b) c) d)
INSERT INTO Films (id, name, synopsis, date_release, evaluation)
VALUES("001","Se Eu Fosse Você","Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos","2006-01-06","7"),
	("002","Doce de mãe","Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela","2012-12-27","10"),
	("003","Dona Flor e Seus Dois Maridos","Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.","2017-11-02","8"),

-- e)
	("004","O Auto da Compadecida","João Grilo e Chicó são dois amigos se metem em várias confusões pelo sertão da Paraíba","2000-09-15","10");
    
-- EXERCICIO 6
-- a) Retorne o id, título e avaliação a partir de um id específico;
SELECT id, name, evaluation FROM Films WHERE id="003";

-- b) Retorne um filme a partir de um nome específico;
SELECT * FROM Films WHERE name="Doce de mãe";

-- c) Retorne o id, título e sinopse dos filmes com avaliação mínima de 7
SELECT id, name, synopsis FROM Films WHERE evaluation>=7;

-- EXERCICIO 7

-- a) Retorna um filme cujo título contenha a palavra vida
SELECT * FROM Films WHERE name LIKE "%vida%";

-- b) Realize a pesquisa de um filme, ou seja: pesquise se o 
-- termo de busca está contido no título ou na sinopse. Utilize qualquer TERMO DE BUSCA para exemplificar.
SELECT * FROM Films WHERE name LIKE "%vida%" OR synopsis LIKE "%vida%";

-- c) Procure por todos os filmes que já tenham lançado
SELECT * FROM Films WHERE date_release > "0001-01-01";

-- d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse
-- e com a avaliação maior do que 7
SELECT * FROM Films WHERE (date_release > "0001-01-01") AND 
(name LIKE "%vida%" OR synopsis LIKE "%vida%") AND
(evaluation>7);

RENAME TABLE Films TO Movie;

-- -------------- APROFUNDAMENTO SQL-------------------

-- EXERCICIO 6

-- a) Altere a tabela de Movies e adicione um novo parâmetro: playing_limit_date que indique a data limite em que o filme será passado no cinema. 
ALTER TABLE Movie ADD COLUMN playing_limit_date DATE;

-- b) Altere a tabela de Movies para que o parâmetro avaliação torne-se rating e possa aceitar valores não inteiros, como, por exemplo, uma avaliação 8.5.
ALTER TABLE Movie CHANGE evaluation rating FLOAT;

-- c) Atualize dois filmes de tal forma que tenhamos um  ainda esteja em cartaz, e outro que já tenha saído
UPDATE Movie SET playing_limit_date="2022-12-25" WHERE id="001";
UPDATE Movie SET playing_limit_date="2022-09-11" WHERE id="002";

-- d) Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.
DELETE FROM Movie WHERE id="003";

UPDATE Movie SET synopsis="Este filme foi deletado" WHERE id="003";
-- R: 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
-- Nada foi alterado na tabela, pois o registro não existe.
