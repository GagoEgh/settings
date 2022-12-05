import { Component, OnInit } from '@angular/core';
import { SideBarService } from 'src/app/services/side-bar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isActive = true;
  constructor(
    private sideBarService: SideBarService,
  ) { }

  ngOnInit(): void { }

  showBar() {
    this.isActive = !this.isActive;
    this.sideBarService.setSideBar(this.isActive);
  }


}
