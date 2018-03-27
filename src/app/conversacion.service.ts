import { Injectable } from '@angular/core';
import { Amigo } from './amigo';


@Injectable()
export class ConversacionService {
  private idAmigo;

  obtenerId(amigo: Amigo) {
    this.idAmigo = amigo.id;
  }

  recibirId() {
    return this.idAmigo;
  }
}
