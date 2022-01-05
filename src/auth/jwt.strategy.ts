import { Injectable, PayloadTooLargeException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export interface JwtPayload {
  email: string; //inserimos as informacoes que serao utilizadas para validacao do user e criacao do token
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRETKEY,
    });
  }
  validate(payload: JwtPayload) {
    //pode-se adicionar validacoes nessa parte
    return payload;
  }
}
