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
  public images: any[];
  private randomLetters: Array<string>;

  //Intervalos
  private lettersInterval: any;
  private pipeInterval: any;

  constructor(private router: Router) { 
    this.name = "Manuel Santiago Chaparro Rojas;";
    this.splitedName = "";
    this.titleUni = undefined;
    this.titleFull = undefined;
    this.images = [
      {src: "angular-icon.webp", class: "", name: "Angular", top: "", height: ""},
      {src: "mysql-icon.webp", class: "", name: "MySql", top: "", height: ""},
      {src: "java-icon.webp", class: "", name: "Java", top: "", height: ""},
      {src: "js-icon.webp", class: "", name: "Js", top: "", height: ""}
    ];
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
    this.addIconsStyle();
    let counter: number = 0;
    this.lettersInterval = setInterval(() => {
      this.splitedName = this.splitedName.replace(/\|/g , "");
      if(show){
        this.splitedName += "|";
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

  private addIconsStyle(){
    let counterTop: number = 0;
    const valueToAddTop: number = 75/this.images.length;
    this.images.forEach(image => {
      image.top = counterTop+"%";
      counterTop += valueToAddTop;

      image.height = valueToAddTop+"% !important";

      const velocity: number = this.getRandomNumber(1, 3);
      const img = document.getElementById(image.name) as HTMLImageElement;
      if(velocity == 1){
        image.class = "slideRightVelOne";
        img.classList.add(image.class);
      }else if(velocity == 2){
        image.class = "slideRightVelTwo";
        img.classList.add(image.class);
      }else{
        image.class = "slideRightVelThree";
        img.classList.add(image.class);
      }

    });
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