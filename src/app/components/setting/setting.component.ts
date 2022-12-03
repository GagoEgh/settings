import { Component, EventEmitter, OnInit, Output, SkipSelf } from '@angular/core';
import { ISettings } from 'src/app/models/settings.interface';
import { SettingsService } from 'src/app/services/setting.service';

@Component({
    selector: 'app-setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.css'],
    providers: [SettingsService]
})
export class SettingComponent implements OnInit {

    public settingsDatas!: ISettings[];
    public isDifference = false;
    public globalSetting!: ISettings[];

    public showDatas!: ISettings[]
    constructor(
        private settingsService: SettingsService,
        @SkipSelf() private globalSettingService: SettingsService
    ) {
        this.settingsDatas = this.settingsService.settingsData;
        this.globalSetting = globalSettingService.settingsData;

    }
    ngOnInit(): void {
     
      
    }

    @Output() changeDatas = new EventEmitter<ISettings[]>()

    public differenceSettings(): boolean {
        let find = this.settingsDatas?.find((data, index) => {
            return data?.url !== this.globalSetting[index]?.url ||
                data?.title !== this.globalSetting[index]?.title ||
                data?.isChecked !== this.globalSetting[index]?.isChecked
        })

        return this.settingsDatas.length !== this.globalSetting.length || !!find
    }

    public add(): void {
        this.settingsDatas.push({
            title: '',
            url: '',
            isChecked: false
        })
    }


    public save(): void {
    
        this.changeDatas.emit(this.settingsDatas);
        this.showDatas = this.settingsDatas;
        // this.globalSetting = this.showDatas
        console.log(this.showDatas)
    }

}