import {Entity} from './entity';

export class Tag extends Entity {

  libelle: string;

  constructor(libelle: string) {
    super();
    this.libelle = libelle;
  }

}
