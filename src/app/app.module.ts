import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SettingsService } from './services/setting.service';
import { AppComponent } from './app.component';
import {
  ContainerComponent, DataComponent, DatasComponent, SettingComponent,
  SideNavComponent, TodoComponent, TodosComponent, TopBarComponent
} from './components';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TodosComponent,
    SideNavComponent,
    SettingComponent,
    ContainerComponent,
    DatasComponent,
    DataComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
