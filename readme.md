#API NewTail

##### Abaixo os endpoints da API

* [GET]/ house 
	: neste endpoint é retornado todas as casas cadastradas no banco de dados.

*	[GET]/house/:id : Neste endpoint retorna dados de uma única casa.


*	[GET]/house/name/:name : Neste endpoint retorna dados de uma única casa sendo buscada pelo nome, caso esta não exista no banco de dados é feito uma consulta na api http://www.anapioficeandfire.com/api/ encontrando os dados os mesmo serão salvos no banco de dados, em seguida retornados.

* [DELETE]/house :Neste endpoint é necessário enviar no body(json) o id da casa que deseja deletar.