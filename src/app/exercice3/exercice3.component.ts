import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  statut: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggle(): void {
    this.statut = !this.statut;
  }

}
