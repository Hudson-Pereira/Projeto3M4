import { Injectable } from '@nestjs/common';

const listaObj = [
  { nome: 'leo', email: 'leo@leo.com.br', idade: 24 },
  { nome: 'Dudinha', email: 'du@da.com.br', idade: 15 },
  { nome: 'marcio', email: 'marcio@chamma.com.br', idade: 35 },
];
//tirar
@Injectable()
export class AppService {
  getHello(): string {
    return 'Rede social online';
  }

  getLista(): string[] {
    return lista;
  }

  getLista2(): object[] {
    return listaObj;
  }
}
