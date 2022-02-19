import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  public socketsView:boolean = true;
  public platformsView:boolean = false;
  public SpecialClientsView:boolean = false;
  constructor() { 
    
  }

  ngOnInit(): void {
  }
  changeToSockets(){
    this.socketsView = true;
    this.platformsView = false;
    this.SpecialClientsView = false;
  }
  changeToPLatforms(){
    this.socketsView = false;
    this.platformsView = true;
    this.SpecialClientsView = false;

  }
  changeToSpecialClientsView(){
    this.socketsView = false;
    this.platformsView = false;
    this.SpecialClientsView = true;
  }
}
