import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDate, IsEmail, IsInt, IsNotEmpty, IsString, IsUrl } from 'class-validator';

const moment = require("moment");

export class CreateUsuarioDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ //utilizado para colocar descricao no swagger
    example: 'Hudson',
    description: `O nome será utilizado para identificar o usuário.` ,
  })
  nome: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ //utilizado para colocar descricao no swagger
    example: 'Oliveira',
    description: `O sobrenome será utilizado para identificar o usuário.` ,
  })
  sobrenome: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ //utilizado para colocar descricao no swagger
    example: 'Rushuop',
    description: `O username será utilizado para nomear o usuário, devendo ser único.` ,
  })
  username: string;
  
  @IsNotEmpty()
  @IsUrl()
  @ApiProperty({ //utilizado para colocar descricao no swagger
    example: 'www.hudson.com.br',
    description: `O imagem será utilizada para visualizar a foto ou desenho escolhido pelo usuário, devendo ser utilizado, nesse projeto, um link URL.`,
  })
  imagem: string;
  
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ //utilizado para colocar descricao no swagger
    example: 'Olá, meu nome é Hudson, sou casado há 11 anos e tenho 3 filhas...',
    description: `A bio será utilizada pelo usuário para uma breve descrição sobre ele.` ,
  })
  bio: string;
 
  @IsNotEmpty()
  // @Transform(nasc => moment(nasc).format('DD/MM/YY'))
  @IsString()
  @ApiProperty({ //utilizado para colocar descricao no swagger
    example: '25101991',
    description: `A data de nascimento será utilizada para registrar a data de nascimento do usuário, para uma possível validação de idade, por exemplo. Aqui utilizada como string.` ,
  })
  nasc: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ //utilizado para colocar descricao no swagger
    example: 'hudson@hudson.com',
    description: `O email é um dos itens mais importantes, pois através dele será localizado o cadastro do usuário no banco para autenticação por senha, para isso, deve ser único.` ,
  })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ //utilizado para colocar descricao no swagger
    example: 'Segredo.1',
    description: `A senha é um dos itens mais importantes, pois é a responsável por validar e autenticar o usuário. Está criptografada com hash do BCRYPT. Tanto na criação quanto na edição, se o usuário fizer alteração de senha.` ,
  })
  senha: string;
}
