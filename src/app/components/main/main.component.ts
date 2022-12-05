import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public index = 0;
  public tabs = ['todos', 'settings'];
  constructor() { }

  ngOnInit(): void {
  }

  showTab(ind:number){
    this.index = ind
  }
}
