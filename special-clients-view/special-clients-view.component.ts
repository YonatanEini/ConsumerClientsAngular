import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-clients-view',
  templateUrl: './special-clients-view.component.html',
  styleUrls: ['./special-clients-view.component.scss']
})
export class SpecialClientsViewComponent implements OnInit {
  OnCrad1:boolean = false;
  OnCard2:boolean = false;
  OnCard3:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  OnCard1Hover(){
    this.OnCrad1 = true;
  }
  OnCard2Hover(){
    this.OnCard2 = true;
  }
  OnCard3Hover(){
    this.OnCard3 = true;
  }

  NonCard1Hover(){
    this.OnCrad1 = false;
  }
  NonCard2Hover(){
    this.OnCard2 = false;
  }
  NonCard3Hover(){
    this.OnCard3 = false;
  }

}
