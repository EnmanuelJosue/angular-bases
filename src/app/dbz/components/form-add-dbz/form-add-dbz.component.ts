import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-form-add-dbz',
  templateUrl: './form-add-dbz.component.html',
  styleUrls: ['./form-add-dbz.component.scss']
})
export class FormAddDbzComponent {
  @Input()
  public title: string = '';

  @Output() sendCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: '',
    name: '',
    power: 0
  };

  saveCharacter(): void{
    this.sendCharacter.emit({...this.character});
    this.character.name = '';
    this.character.power = 0;
  }
}
