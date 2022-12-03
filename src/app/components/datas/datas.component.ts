import { Component, Input, OnInit} from '@angular/core';
import { ISettings } from 'src/app/models/settings.interface';


@Component({
    selector: 'app-datas',
    templateUrl: './datas.component.html',
    styleUrls: ['./datas.component.css']
})
export class DatasComponent implements OnInit {
    @Input()data!:ISettings;
    
    constructor(){}
    ngOnInit(): void {
    //    console.log(this.data)
    }

}