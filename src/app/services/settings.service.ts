import { Injectable } from '@angular/core';
import { ISettings } from '../models/settings.interface';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private _settings: ISettings[] = [
    {
      title: 'Dashboard',
      url: 'https://example.com/dashboard',
      isChecked: true
    },
    {
      title: 'Home',
      url: 'https://example.com/home',
      isChecked: true
    },
    {
      title: 'Accesses',
      url: 'https://example.com/accesses',
      isChecked: true
    },
    {
      title: 'Users',
      url: 'https://example.com/users',
      isChecked: true
    },
    {
      title: 'Requests',
      url: 'https://example.com/requests',
      isChecked: true
    }
  ]

  constructor() { }

  private changeReferance(obj: ISettings[]) {
    let arr = [];
    for (let i = 0; i < obj.length; i++) {
      let ref = { ...obj[i] };
      arr.push(ref)
    }
    return arr
  }

  public getSettings(): ISettings[] {
    this._settings = this.changeReferance(this._settings);
    return this._settings
  }

  public setSettings(settings: ISettings[]) {
    this._settings = this._settings.filter((item)=>{
      return item.isChecked
    })
    this._settings = this.changeReferance(settings);
  }
}
