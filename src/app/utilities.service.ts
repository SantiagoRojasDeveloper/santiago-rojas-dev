import { Injectable } from '@angular/core';

interface MenuItem{
  name: string,
  active: boolean,
  value: number
}

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  private randomLetters: Array<string>;
  private menuOptions: Array<MenuItem>; 

  constructor(){
    this.randomLetters = ["$","%","!","°",";",";",";","$","&","/","(",")","?","¿","¡","1","2",
    "3","4","5","6","7","8","9","0",":",".","-","_"];
    this.menuOptions = [
      {name: "PRESENTACIÓN", active: false, value: 0},
      {name: "¿QUIÉN SOY?", active: true, value: 1},
      {name: "LENGUAJES Y FRAMEWORKS", active: false, value: 2},
      {name: "PROYECTOS", active: false, value: 3},
      {name: "CONTACTO", active: false, value:4}
    ];
  }

  getMenuOptions(){
    return this.menuOptions;
  }

  changeWindow(value: number){
    debugger;
    let menuCopy = this.menuOptions.slice();
    const toMove = menuCopy.splice(value, 1)[0];
    toMove.active = true;
    menuCopy.splice(2, 0, toMove);
    return menuCopy;
  }

  changeLetters(words: string){
    const randomLetter = this.randomLetters[this.getRandomNumber(0, this.randomLetters.length)];
    const randomPositionToReplace = this.getRandomNumber(0, words.length);
    let splicedWord = words.split('');
    splicedWord[randomPositionToReplace] = randomLetter;
    return splicedWord.join('');
  }

  pause(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  getRandomNumber(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }
}
