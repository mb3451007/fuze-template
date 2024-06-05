import { ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SpreadsheetModule } from '@syncfusion/ej2-angular-spreadsheet';
import { SharedService } from './services/shared.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DarkModeService } from './dark-mode.service';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        RouterOutlet,
        SpreadsheetModule,
        CommonModule,
        HeaderComponent,
        SidebarComponent,
    ],
})
export class AppComponent implements OnInit {
    constructor(private sharedService: SharedService, private darkModeService:DarkModeService, private changeDetector: ChangeDetectorRef) {}
    isDarkMode:boolean=false;
    isFullscreen = false;
    applicationFullscreen: boolean;
    showSideBar: boolean = true;
    toggleSideBar: boolean = false;
    ngOnInit(): any {
        if (window.location.pathname.indexOf('auth') >= 0) {
            this.showSideBar = false;
        }
        this.sharedService.fullscreenState$.subscribe((isFullscreen) => {
            this.isFullscreen = isFullscreen;
        });
        // Dark Mode
        this.darkModeService.darkMode$.subscribe(response=>{
            this.isDarkMode=response;
            document.body.classList.toggle('dark-mode', response);
            console.log(response, 'is dark mode is opened');
            
        })

        this.sharedService.toggleSideBar.subscribe((v: any) => { 
            this.toggleSideBar = v;
            console.log ('yesssss', this.toggleSideBar)
            this.changeDetector.detectChanges();
        })

    };

}
