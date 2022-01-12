import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post()
    async login(@Body() data: LoginDto){
        return this.authService.login(data);
    } //autenticar o login

    @Get()
    @UseGuards(AuthGuard()) //endpoint para autenticacao
    async checkLogin(){
        return 'Usuário logado';
    } //confirmacao de autenticacao
}
