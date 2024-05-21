import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SpreadsheetModule } from '@syncfusion/ej2-angular-spreadsheet';
import { SharedService } from './services/shared.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
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
    constructor(private sharedService: SharedService) {}
    isFullscreen = false;
    applicationFullscreen: boolean;
    ngOnInit(): any {
        this.sharedService.fullscreenState$.subscribe((isFullscreen) => {
            this.isFullscreen = isFullscreen;
        });
    }
}
