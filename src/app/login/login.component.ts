import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public name: string;
  public splitedName: string;

  constructor() { 
    this.name = "Manuel Santiago Chaparro Rojas";
    this.splitedName = "";
  }

  ngOnInit(): void {
    const dividedName: Array<string> = this.name.split("");
    let i = 0;
    let showPipe: boolean = true;
  
    const intervalId = setInterval(() => {
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
        clearInterval(intervalId);
        this.showAndHidePipe(true);
        this.showTitle();
      }
    }, 150); // Intervalo de 5 segundos
  }

  private showAndHidePipe(show: boolean){ 
    
    const intervalId = setInterval(() => {
      this.splitedName = this.splitedName.replace(/\|/g , "");
      if(show){
        this.splitedName += " |";
        show = false;
      }else{
        show = true;
      }
    }, 1000);

    
  }

  private showTitle(){
    
  }
}
