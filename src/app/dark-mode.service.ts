import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DarkModeService {
    private darkMode = new BehaviorSubject<boolean>(false);
    darkMode$ = new BehaviorSubject<boolean>(false);
    constructor(){
        const isDarkMode=localStorage.getItem('isDarkMode')==='true';
        this.darkMode$=new BehaviorSubject<boolean>(isDarkMode);
    }
    toggleDarkMode(isDarkMode: boolean) {
        console.log('ssssssssss', isDarkMode)
        localStorage.setItem('isDarkMode',isDarkMode.toString())
        this.darkMode$.next(isDarkMode);
    }
}
