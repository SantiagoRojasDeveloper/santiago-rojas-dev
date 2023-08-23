import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from '../utilities.service';

interface MenuItem{
  name: string,
  active: boolean,
  value: number
}

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.css']
})
export class NavegationComponent implements OnInit {

  public options: Array<MenuItem>;

  constructor(private utilitie: UtilitiesService) { 
    this.options = utilitie.getMenuOptions();
  }

  ngOnInit(): void {
  }

  changeWindow(value: number){
    this.options = this.utilitie.changeWindow(value);
  }
}
