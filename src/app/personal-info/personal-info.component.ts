import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilitiesService } from '../utilities.service';

interface Option {
  name: string,
  value: number
}

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  private title: string;
  public changingTitle: string;
  public options: Array<Option>;
  public selectedOption: number;

  //Intervalos
  private titleInterval: any;

  constructor(private router: Router, private utilities: UtilitiesService) {
    this.title = "¿QUIÉN SOY?";
    this.changingTitle = "¿QUIÉN SOY?";
    this.options = [
      { name: "Sobre mí", value: 0 },
      { name: "Educación", value: 1 },
      { name: "Experiencia", value: 2 }
    ];
    this.selectedOption = 0;
  }

  ngOnInit(): void {
    this.initAnimation();
  }

  ngAfterViewInit() {
    this.changeWindow(0);
  }

  async initAnimation() {
    //Intervalo de titulo
    this.titleInterval = setInterval(() => {
      this.changingTitle = this.utilities.changeLetters(this.title);
    }, 5000);
    //Muestra de información
    const infoContainer = document.getElementById("info-container") as HTMLDivElement;
    infoContainer.classList.add("slide-container");
  }

  changeWindow(value: number) {
    this.selectedOption = value;
    this.options.forEach(option => {
      const button = document.getElementById(""+option.value) as HTMLButtonElement;
      if(option.value == value){
        button.style.filter = "brightness(1.5)";
      }else{
        button.style.removeProperty("filter");
      }
    });
  }

  private cleanWindow() {
    clearInterval(this.titleInterval);
  }

}
