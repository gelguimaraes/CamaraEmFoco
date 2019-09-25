export class ConfigService {
  private urlServiceParlamentar: string;
  private urlServiceParlamentarLocal: string;

  constructor() {
    this.urlServiceParlamentarLocal = 'http://localhost:3000/';
    this.urlServiceParlamentar = 'https://dadosabertos.camara.leg.br/api/v2/deputados/';

  }

  getUrlServiceParlamentarLocal(): string {
    return this.urlServiceParlamentarLocal;
  }

  getUrlServiceParlamentar(): string {
    return this.urlServiceParlamentar;
  }
}
