import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list-dbz',
  templateUrl: './list-dbz.component.html',
  styleUrls: ['./list-dbz.component.scss']
})
export class ListDbzComponent {
  @Input()
  public title: string = '';

  @Input()
  public characters: Character[] = [];

  @Output()
  onDeleteCharacter = new EventEmitter<string>();

  deleteItem(uuid: string):void{
    this.onDeleteCharacter.emit(uuid);
  }
}
