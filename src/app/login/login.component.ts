import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public name: string;
  public splitedName: string;
  public titleUni: string | undefined;
  public titleFull: string | undefined;
  private randomLetters: Array<string>;

  //Intervalos
  private lettersInterval: any;
  private pipeInterval: any;

  constructor(private router: Router) { 
    this.name = "Manuel Santiago Chaparro Rojas;";
    this.splitedName = "";
    this.titleUni = undefined;
    this.titleFull = undefined;
    this.randomLetters = ["$","%","!","°",";",";",";","$","&","/","(",")","?","¿","¡","1","2",
                          "3","4","5","6","7","8","9","0",":",".","-","_"];
  }

  @HostListener('window:click', ['$event'])
  onClick(event: MouseEvent) {
    this.nextWindow();
  }

  ngOnInit(): void {
    const dividedName: Array<string> = this.name.split("");
    let i = 0;
    let showPipe: boolean = true;
  
    this.pipeInterval = setInterval(() => {
      if (i < dividedName.length) {
        if(showPipe){
          this.splitedName += dividedName[i] + "|";
          showPipe = false;
        }else{
          this.splitedName += dividedName[i];
          this.splitedName = this.splitedName.replace(/\|/g , "");
          showPipe = true;
        }
        
        i++;
      } else {
        clearInterval(this.pipeInterval);
        this.showAndHidePipe(true);
        this.showTitle();
      }
    }, 150);
  }

  private async nextWindow(){
    clearInterval(this.pipeInterval);
    clearInterval(this.lettersInterval);
    
    const body = document.getElementById("body") as HTMLDivElement;
    body.classList.add("slideLeft");
  
    const line = document.getElementById("line") as HTMLDivElement;
    line.classList.add("slideForceLeft");
    await this.pause(3000);
    this.name = "";
    this.splitedName = "";
    this.titleUni = "";
    this.titleFull = "";
    body.classList.remove("slideLeft");
    line.classList.remove("slideForceLeft");
    this.router.navigate(['/home']);
  }

  private showAndHidePipe(show: boolean){ 
    let counter: number = 0;
    this.lettersInterval = setInterval(() => {
      this.splitedName = this.splitedName.replace(/\|/g , "");
      if(show){
        this.splitedName += " |";
        show = false;
      }else{
        this.splitedName = this.name;
        const randomNumber = this.getRandomNumber(0, 28);
        const letterToReplace = this.splitedName[randomNumber];
        this.splitedName = this.splitedName.replace(letterToReplace, this.randomLetters[randomNumber]);
        show = true;
      }

      if(counter == 15000){
        clearInterval(this.lettersInterval);
        this.nextWindow();
      }else{
        counter += 1000;
      }
    }, 1000);
  }

  private showTitle(){
    this.titleUni = "INGENIERO DE SISTEMAS Y COMPUTACIÓN";
    this.titleFull = "FULLSTACK DEVELOPER"
    const titles = document.getElementById("titles") as HTMLDivElement;
    titles.classList.add("showFromLeft");
  }

  private getRandomNumber(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }

  pause(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}