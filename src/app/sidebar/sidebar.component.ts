import { Component, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DarkModeService } from 'app/dark-mode.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedService } from 'app/services/shared.service';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule,RouterModule],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit{
    currentPath:any;
    isDarkMode:boolean=false;
    isHomeVisible: boolean = false;
    isArchivioVisible: boolean = true;
    isWorkspaceVisible: boolean = true;
    isReportVisible: boolean = true;
    isSupportoVisible: boolean = true;
    isFoglioVisible: boolean = true;
    isModalVisible = false;
    clicked: boolean = false;

    constructor(private router: Router, private renderer: Renderer2,private darkModeService:DarkModeService, private sharedService: SharedService) {
        this.currentPath=window.location.pathname;
        this.router.events.subscribe((event)=>{
            if(event instanceof NavigationEnd){
                this.currentPath=event.url;
            }
        })
    }

    ngOnInit(): void {
        console.log ('url of active component', window.location.pathname)
        switch (window.location.pathname) {
            case '/home':
            case 'home':
                this.openModal('home');
                break;
            case '/archivio':
            case 'archivio':
                this.openModal('archvio');
                break;
            case '/workspace':
            case '/workspace':
                this.openModal('Workspace');
                break;
            case '/report':
            case 'report':
                this.openModal('Report');
                break;
            case '/supporto':
            case 'supporto':
                this.openModal('Supporto');
                break;
            case 'foglio':
            case '/foglio':
                this.openModal('Foglio');
                
        }
        this.darkModeService.darkMode$.subscribe(response=>{
            this.isDarkMode=response;            
        })
    }

    toggle: boolean = false;

    toggleSidebar() {
        console.log ('inside')
        this.clicked = !this.clicked;
        
        var headArrows = document.querySelectorAll('.head-arrow');
        // Loop through each element with the class .head-arrow and attach the click event listener
        headArrows.forEach(function (headArrow) {
            headArrow.addEventListener('click', function () {
                // Select all elements with the class .sidebar and toggle the class .active
                var sidebars = document.querySelectorAll(
                    '.sidebar,.dashboard-right'
                );
                sidebars.forEach(function (sidebar) {
                    console.log ('inside11')
                    sidebar.classList.toggle('active');
                });
            });
        });
        if (this.clicked) {
            this.toggle = !this.toggle;
            this.sharedService.setToggle(this.toggle)
            document.getElementById('toggleBtn').click();
        }
    }
    
    closeModal(): void {
        this.isModalVisible = true;
    }

    openModal(navlink: string) {
        this.isModalVisible = false;

        if (navlink === 'home') {
            this.isHomeVisible = false;
            this.isArchivioVisible = true;
            this.isWorkspaceVisible = true;
            this.isReportVisible = true;
            this.isSupportoVisible = true;
            this.isFoglioVisible = true;
            this.router.navigate(['/home']);
        }

        if (navlink === 'archvio') {
            this.isHomeVisible = true;
            this.isArchivioVisible = false;
            this.isWorkspaceVisible = true;
            this.isReportVisible = true;
            this.isSupportoVisible = true;
            this.isFoglioVisible = true;
            this.router.navigate(['/archivio']);
        }

        if (navlink === 'Workspace') {
            this.isHomeVisible = true;
            this.isArchivioVisible = true;
            this.isWorkspaceVisible = false;
            this.isReportVisible = true;
            this.isSupportoVisible = true;
            this.isFoglioVisible = true;
            this.router.navigate(['/workspace']);
        }

        if (navlink === 'Report') {
            this.isHomeVisible = true;
            this.isArchivioVisible = true;
            this.isWorkspaceVisible = true;
            this.isReportVisible = false;
            this.isSupportoVisible = true;
            this.isFoglioVisible = true;
            this.router.navigate(['/report']);
        }

        if (navlink === 'Supporto') {
            this.isHomeVisible = true;
            this.isArchivioVisible = true;
            this.isWorkspaceVisible = true;
            this.isReportVisible = true;
            this.isSupportoVisible = false;
            this.isFoglioVisible = true;
            this.router.navigate(['/supporto']);
        }
        if (navlink === 'Foglio') {
            this.isHomeVisible = true;
            this.isArchivioVisible = true;
            this.isWorkspaceVisible = true;
            this.isReportVisible = true;
            this.isSupportoVisible = true;
            this.isFoglioVisible = false;
            this.router.navigate(['/foglio']);
        }
    }

    homeVisible() {
        this.isHomeVisible = true;
        this.isArchivioVisible = false;
        this.isWorkspaceVisible = true;
        this.isReportVisible = true;
        this.isSupportoVisible = true;
        this.isFoglioVisible = true;
    }

    archivioVisible() {
        this.isHomeVisible = true;
        this.isArchivioVisible = true;
        this.isWorkspaceVisible = false;
        this.isReportVisible = true;
        this.isSupportoVisible = true;
        this.isFoglioVisible = true;
    }

    workspaceVisible() {
        this.isHomeVisible = true;
        this.isArchivioVisible = true;
        this.isWorkspaceVisible = true;
        this.isReportVisible = true;
        this.isSupportoVisible = true;
        this.isFoglioVisible = false;
    }

    reportVisible() {
        this.isHomeVisible = true;
        this.isArchivioVisible = true;
        this.isWorkspaceVisible = true;
        this.isReportVisible = true;
        this.isSupportoVisible = false;
        this.isFoglioVisible = true;
    }

    foglioVisible() {
        this.isHomeVisible = true;
        this.isArchivioVisible = true;
        this.isWorkspaceVisible = true;
        this.isReportVisible = false;
        this.isSupportoVisible = true;
        this.isFoglioVisible = true;
    }

    supportoVisible() {
        this.isModalVisible = true;
    }

    activeHome() {
        this.isHomeVisible = false;
        this.isArchivioVisible = true;
        this.isWorkspaceVisible = true;
        this.isReportVisible = true;
        this.isSupportoVisible = true;
        this.isFoglioVisible = true;
    }

    activeArchivio() {
        this.isHomeVisible = true;
        this.isArchivioVisible = false;
        this.isWorkspaceVisible = true;
        this.isReportVisible = true;
        this.isSupportoVisible = true;
        this.isFoglioVisible = true;
    }

    activeWorkspace() {
        this.isHomeVisible = true;
        this.isArchivioVisible = true;
        this.isWorkspaceVisible = false;
        this.isReportVisible = true;
        this.isSupportoVisible = true;
        this.isFoglioVisible = true;
    }

    activeReport() {
        this.isHomeVisible = true;
        this.isArchivioVisible = true;
        this.isWorkspaceVisible = true;
        this.isReportVisible = false;
        this.isSupportoVisible = true;
        this.isFoglioVisible = true;
    }

    activeFoglio() {
        this.isHomeVisible = true;
        this.isArchivioVisible = true;
        this.isWorkspaceVisible = true;
        this.isReportVisible = true;
        this.isSupportoVisible = true;
        this.isFoglioVisible = false;
    }

    activeSupporto() {
        this.isHomeVisible = true;
        this.isArchivioVisible = true;
        this.isWorkspaceVisible = true;
        this.isReportVisible = true;
        this.isSupportoVisible = false;
    }

    navigateToFoglio() {
        this.router.navigate(['/foglio']);
    }

    navigateTo(route: string): void {
        switch (route) {
            case 'home':
                this.router.navigate(['home']);
                break;
            case 'archivio':
                this.router.navigate(['archivio']);
                break;
            case 'workspace':
                this.router.navigate(['workspace']);
                break;
            case 'foglio':
                this.router.navigate(['foglio']);
                break;
            case 'report':
                this.router.navigate(['report']);
                break;
            case 'supporto':
                this.router.navigate(['supporto']);
                break;
            default:
                console.error(`Unknown route: ${route}`);
        }
    }
    
      isActive(route: string): boolean {
        return this.currentPath === route;        
      }
    
}
