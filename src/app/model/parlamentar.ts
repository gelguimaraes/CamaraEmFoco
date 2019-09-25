import {Despesa} from './despesa';

export class Parlamentar {
  id: number;
  nomeParlamentar: string;
  siglaPartido: string;
  siglaUf: string;
  urlFoto: string;
  email: string;
  condicaoEleitoral: string;
  numeroDeputadoID: number;
  despesas: Array<Despesa>;
}
