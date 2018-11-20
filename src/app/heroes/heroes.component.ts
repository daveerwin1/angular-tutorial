import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  private onSelect(hero: Hero) {
    // Clicking a hero pass the object from the template here.
    // Then we set this.hero to the hero passed in.
    // Now the hero.name outside of the ngFor will show the clicked hero. 
    this.selectedHero = hero;
  }

}
