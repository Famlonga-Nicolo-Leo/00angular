import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

// 1. Definisci interfacce e costanti PRIMA o FUORI dal componente
export interface Emoji {
  name: string;
  emoji: string;
}

export const FRUITS: Emoji[] = [
  { name: 'Apple', emoji: '🍎' },
  { name: 'Banana', emoji: '🍌' },
  { name: 'Cherry', emoji: '🍒' },
];

export const ANIMALS: Emoji[] = [
  { name: 'Dog', emoji: '🐶' },
  { name: 'Cat', emoji: '🐱' },
  { name: 'Monkey', emoji: '🐵' },
];


@Component({
  selector: 'app-generic',
  standalone: true, // Se usi versioni recenti di Angular
  imports: [],
  templateUrl: './generic.html',
  styleUrl: './generic.css',
})
export class Generic {
  genVect: Emoji[] = []; // Inizializza con array vuoto

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) => {
    let uri_param = params.get('id');
    console.log(uri_param);

    if (uri_param === 'fruits') this.genVect = FRUITS;
    else if (uri_param === 'animals') this.genVect = ANIMALS;
    else this.genVect = []; // Reset se non trova nulla
  }
}