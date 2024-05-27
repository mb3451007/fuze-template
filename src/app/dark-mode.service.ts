import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DarkModeService {
    private darkMode = new BehaviorSubject<boolean>(false);
    darkMode$ = this.darkMode.asObservable();

    toggleDarkMode(isDarkMode: boolean) {
        this.darkMode.next(isDarkMode);
    }
    constructor() {}
}
