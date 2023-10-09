import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent implements OnInit {



  constructor(
    private dbzService: DbzService
  ) {
  }

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(uuid: string): void{
    this.dbzService.onDeleteCharacter(uuid);
  }

  getCharacter(character:Character): void{
    this.dbzService.getCharacter(character);
  }

  ngOnInit() { }


}
