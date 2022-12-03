import { Component, Input } from "@angular/core";
import { ISettings } from "src/app/models/settings.interface";

@Component({
    selector:'app-data',
    templateUrl:'./data.component.html',
    styleUrls:['./data.component.css']
})
export class DataComponent{

    @Input()data!:ISettings

}