import { Component, EventEmitter, Output } from '@angular/core';
import { ISettings } from 'src/app/models/settings.interface';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css']
})
export class ContainerComponent {

    public isTodo = true;
    @Output()changeDate = new EventEmitter<ISettings[]>()
    constructor() { }
    onchange(settings: ISettings[]) {
        this.changeDate.emit(settings);
    }
}