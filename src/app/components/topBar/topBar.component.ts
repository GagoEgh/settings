import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ISettings } from 'src/app/models/settings.interface';

@Component({
    selector: 'app-bar',
    templateUrl: './topBar.component.html',
    styleUrls: ['./topBar.component.css']
})
export class TopBarComponent {

    private isShow = true;
    @ViewChild('nav', { static: false })
    nav!: ElementRef;

    @Input() settingsData!: ISettings[];

    showNavBar() {
        let navBar = this.nav.nativeElement;
        navBar.style.left = 0 + 'px';
        this.isShow = !this.isShow;
        if (this.isShow) {
            navBar.style.left = -210 + 'px';
        }
    }
}