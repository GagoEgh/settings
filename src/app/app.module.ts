import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import {
  HeaderComponent,
  MainComponent,
  SettingsComponent,
  SettingsDataComponent,
  SideBarComponent,
  TodoComponent
} from './components';
import { SideBarService } from './services/side-bar.service';



@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    MainComponent,
    TodoComponent,
    SettingsComponent,
    SettingsDataComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SideBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
