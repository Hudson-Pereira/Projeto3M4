Api para controle de rede social tipo Tweeter.

Ferramentas utilizadas: 
PRISMA, NEST, @nest/client, SWAGGER, THUNDERCLIENT e BCRYPT. (obs.: se esqueci de algum, favor marcar aqui nesse parenteses para eu me lembrar....)
Swagger rodando em http://localhost:3000/api

Todas as rotas possuem crud completo, ou seja, Create, Read, Update(Patch) e Delete.
Todas as rotas estão validadas com @Decorator para campos vazios, quando solicitados obrigatoriamente, e tipo de dados.
Todas as senhas e alterações de senha estão criptografadas com BCRYPT.

A rota POST /usuario está aberta para criação sem autenticação. As rotas GET /usuario/id, PATCH /usuario/id e DELETE /usuario/id estão autenticadas com "@UseGuards(AuthGuard('jwt'))", onde somente serão acessadas com usuários válidados pelo token de acesso gerado pelo JWT. A rota GET usuario não está autenticada para que possa ser verificado o ID do usuário criado para testar o login para geração do token.

A rota GET /tweet e /tweet/id estão com acesso livre para consulta. As rotas POST /tweet, PATCH /tweet/id e DELETE /tweet/id estão autenticadas com "@UseGuards(AuthGuard('jwt'))", onde somente serão acessadas com usuários válidados pelo token de acesso gerado pelo JWT.

As rotas GET /seguidores, /seguidores/id e GET /seguindo, /seguindo/id estão liberadas para consultas. As rotas POST /seguidores e /seguindo, PATCH /seguidores/id e /seguindo/id e DELETE /seguidores/id e /seguindo/id estão autenticadas com "@UseGuards(AuthGuard('jwt'))", onde somente serão acessadas com usuários válidados pelo token de acesso gerado pelo JWT.