import { Component, Input, OnInit } from '@angular/core';
import { ISettings } from 'src/app/models/settings.interface';

@Component({
  selector: 'app-settings-data',
  templateUrl: './settings-data.component.html',
  styleUrls: ['./settings-data.component.css']
})
export class SettingsDataComponent implements OnInit {

  constructor() { }

  @Input()setting!:ISettings
  ngOnInit(): void {
  }

  
}
