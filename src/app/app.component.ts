import { Component } from '@angular/core';
import { ISettings } from './models/settings.interface';
import { SettingsService } from './services/setting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SettingsService]
})
export class AppComponent {

  settingsData!: ISettings[];

 constructor(private setting:SettingsService){
  this.settingsData = setting.settingsData;
 }

  changeDate(datas: ISettings[]) {
    this.settingsData = datas;
  }
}
