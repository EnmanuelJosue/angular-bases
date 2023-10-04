import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  public hero: string = 'spiderman';
  public age: number = 18;

  get capitalizedName():string {
    return this.hero.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.hero} - ${this.age}`;
  }


  changeHero():void {
    this.hero = 'ironman';
  }

  changeAge():void {
    this.age = 20;
  }

  reset(){
    this.hero = 'spiderman';
    this.age = 18;
  }
}
