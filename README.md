Api para controle de rede social tipo Tweeter.

Ferramentas utilizadas: 
PRISMA, NEST, @nest/client, SWAGGER, THUNDERCLIENT e BCRYPT. (obs.: se esqueci de algum, favor marcar aqui nesse parenteses para eu me lembrar....)
Swagger rodando em http://localhost:3000/api

Todas as rotas possuem crud completo, ou seja, Create, Read, Update(Patch) e Delete. Com excessão das rotas favoritos e categoriadotweet, que são do tipo de relação Many-to-many e possuem apenas as rotas GET e POST.
Todas as informações inseridas através das rotas estão validadas com @Decorator para campos vazios, quando solicitados obrigatoriamente, e tipo de dados.
Todas as senhas e alterações de senha estão criptografadas com BCRYPT.

A rota POST /usuario está aberta para criação sem autenticação. As rotas GET /usuario/id, PATCH /usuario/id e DELETE /usuario/id estão autenticadas com "@UseGuards(AuthGuard('jwt'))", onde somente serão acessadas com usuários válidados pelo token de acesso gerado pelo JWT para pesquisa individual, alteração de informações e deletar usuários. A rota GET /usuario não está autenticada para que possa ser verificado os IDs dos usuários criados para testar o login para geração do token.

A rota GET /tweet e /tweet/id estão com acesso livre para consulta. As rotas POST /tweet, PATCH /tweet/id e DELETE /tweet/id estão autenticadas com "@UseGuards(AuthGuard('jwt'))", onde somente serão acessadas com usuários válidados pelo token de acesso gerado pelo JWT,para alteração de informações e deletar tweet.

As rotas GET /seguidores, /seguidores/id e GET /seguindo, /seguindo/id estão liberadas para consultas. As rotas POST /seguidores e /seguindo, PATCH /seguidores/id e /seguindo/id e DELETE /seguidores/id e /seguindo/id estão autenticadas com "@UseGuards(AuthGuard('jwt'))", onde somente serão acessadas com usuários válidados pelo token de acesso gerado pelo JWT para alteração de informações e deletar informações.

As rotas POST /categoria, POST /favoritos e POST /categoriadotweet estão liberadas de autenticação. Sendo utilizadas cadastrando o ID do tweet com o ID do usuário para favoritos e ID do tweet e ID da categoria para categoriadotweet.

A rota POST /categoria é utilizada antes de criar qualquer coisa para cadastrar as categorias que os tweets irão pertencer.

A rota POST /favoritos e POST /categoriadotweet são criadas após a criação de ao menos um tweet, sendo utilizadas para favoritar um tweet a um usuário e categorizar o tipo do tweet, sucessivamente.

Mais informações de uso, favor conferir no SWAGGER (apenas a rota POST /usuário está com descrição no swagger, para efeito de aprendizado, foi utilizado recurso apenas nessa rota).

Projeto feito deploy no Heroku, acesso pelo link: https://projeto3m4.herokuapp.com/