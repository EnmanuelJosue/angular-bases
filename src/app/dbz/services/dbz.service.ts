import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';



@Injectable({
  providedIn: 'root'
})
export class DbzService {

  characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 500
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
  ];

  getCharacter(character: Character):void{
    const newCharacter: Character = {
      ...character, id: uuid()
    }
    this.characters.push(newCharacter);
  }

  onDeleteCharacter(uuid: string){
    this.characters = this.characters.filter( character => character.id !== uuid );
  }

}
