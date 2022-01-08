import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginDto } from './../auth/dto/login.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Usuario, Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtPayload } from 'src/auth/jwt.strategy';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UsuarioCreateInput): Promise<Usuario> { //criando usuario com o prisma
    data.senha = await bcrypt.hash(data.senha,10)
    try {
      const createdUser = await this.prisma.usuario.create({data});
      createdUser.senha = undefined;
      return createdUser;
    } catch (error) {
      throw new HttpException('E-mail já cadastrado.', HttpStatus.BAD_REQUEST);
    }
    
  //pegando a senha e passando pelo bcrypt embaralhando 10x  
    // return await this.prisma.usuario.create({ data });
  }
          //se der erro voltar para CreateUserDto
  async findByLogin(login: LoginDto): Promise<Usuario>{ //criando login
    const user = await this.prisma.usuario.findFirst({
      where: {
        email: login.email,
      },
    }); //testando o dado com o primeiro item encontrado
    
    const senhaIgual = await bcrypt.compare(login.senha,user.senha); //comparando a senha inserida com a senha no banco criptografada com bcryot
    
    if(!user) {
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND,)
    }//parando o login quando nao encontrado o user

    if(!senhaIgual) {
      throw new HttpException('Senha inválida.', HttpStatus.UNAUTHORIZED,)
    } //parando o login quando senha nao confere

    return user; //retornando usuario quando validado
  }

  async validateUser(payload: JwtPayload): Promise<Usuario> { //validacao do usuario pelo payload
    const user = await this.prisma.usuario.findFirst({
      where: 
      { email: payload.email,
      }
    })

    if(!user) {
      throw new HttpException('Token inválido.', HttpStatus.UNAUTHORIZED);
    }

    return user;
  }

  findAll():Promise<Usuario[]> {
    return this.prisma.usuario.findMany();
  }

  async findOne(id: number): Promise<Usuario> {
    return await this.prisma.usuario.findUnique({where: {id}});
  }

  async update(id: number, data: UpdateUsuarioDto): Promise<Usuario> {
    data.senha = await bcrypt.hash(data.senha,10)
    return await this.prisma.usuario.update({data, where: {id}});
  }

  async remove(id: number): Promise<Usuario> {
    return await this.prisma.usuario.delete({where: {id}});
  }
}
