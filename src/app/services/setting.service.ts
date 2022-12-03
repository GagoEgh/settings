import { ISettings } from "../models/settings.interface";

export class SettingsService {
    constructor() { }
    public settingsData: ISettings[] = [
        {
            title: 'Dashboard',
            url: 'https://example.com/dashboard',
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
}
