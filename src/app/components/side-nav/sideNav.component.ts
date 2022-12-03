import { Component, Input, SimpleChanges } from '@angular/core';
import { ISettings } from 'src/app/models/settings.interface';
import { SettingsService } from 'src/app/services/setting.service';

@Component({
    selector: 'app-nav',
    templateUrl: './sideNav.component.html',
    styleUrls: ['./sideNav.component.css'],

})
export class SideNavComponent  {

    settingsData!: ISettings[];
    clone!: ISettings[]

    @Input('settingsData') newSettings!: ISettings[];

    constructor(
        private settingsService: SettingsService,
    ) {
        this.settingsData = this.settingsService.settingsData;
    }



    ngOnChanges(changes: SimpleChanges): void {
        this.changeData();
    }

    changeData() {
        if (this.newSettings) {
          this.settingsData = this.newSettings;
        }
    }

 

}