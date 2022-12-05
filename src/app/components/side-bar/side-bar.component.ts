import { Component, OnInit } from '@angular/core';
import { ISettings } from 'src/app/models/settings.interface';
import { SettingsService } from 'src/app/services/settings.service';
import { SideBarService } from 'src/app/services/side-bar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  public isShow = true;
  public settings!: ISettings[];
  constructor(
    private sideBarService: SideBarService,
    private settingsService: SettingsService
  ) {
    this.settings = this.getSettings();
  }

  ngOnInit(): void { }

  showSideBar() {
    return this.sideBarService.getSideBar()
  }

  getSettings() {
    return this.settingsService.getSettings()
  }
}
