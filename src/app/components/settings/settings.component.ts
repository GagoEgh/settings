import { Component, OnInit } from '@angular/core';
import { ISettings } from 'src/app/models/settings.interface';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public settings!: ISettings[];

  constructor(
    private settingsService: SettingsService
  ) {
    this.settings = this.settingsService.getSettings();
  }

  ngOnInit(): void { }

  public add(): void {
    this.settings.push({
      title: '',
      url: '',
      isChecked: true
    });

  }

  save(){
    this.settings = this.settings.filter((item)=>{
      return item.isChecked
    })
    this.settingsService.setSettings(this.settings)
  }

  showSaveBtn() {
    let serviceSettingData = this.settingsService.getSettings();
    let find = this.settings?.find((data, index) => {
      return data?.url !== serviceSettingData[index]?.url ||
        data?.title !== serviceSettingData[index]?.title ||
        data?.isChecked !== serviceSettingData[index]?.isChecked
    })
    return this.settings.length !== serviceSettingData.length || !!find
  }

}
