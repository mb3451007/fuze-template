import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
    isHomeVisible: boolean = false;
    isArchivioVisible: boolean = true;
    isWorkspaceVisible: boolean = true;
    isReportVisible: boolean = true;
    isSupportoVisible: boolean = true;
    constructor(private router: Router) { }
    toggleSidebar() {
        var headArrows = document.querySelectorAll('.head-arrow');
        // Loop through each element with the class .head-arrow and attach the click event listener
        headArrows.forEach(function (headArrow) {
            headArrow.addEventListener('click', function () {
                // Select all elements with the class .sidebar and toggle the class .active
                var sidebars = document.querySelectorAll(
                    '.sidebar,.dashboard-right'
                );
                sidebars.forEach(function (sidebar) {
                    sidebar.classList.toggle('active');
                });
            });
        });
    }

    OnInit() {
        this.activeSupporto();
    }

    closeModal(): void {
        const overlay = document.querySelector('.overly');
        const modal = document.querySelector('.modal-qui');

        if (overlay && modal) {
            overlay.classList.add('hidden');
            modal.classList.add('hidden');
        }
    }

    openModal(navlink: string) {
        const overlay = document.querySelector('.overly');
        const modal = document.querySelector('.modal-qui');

        if (overlay && modal) {
            overlay.classList.remove('hidden');
            modal.classList.remove('hidden');
        }

        if (navlink === 'home') {
            this.isHomeVisible = false;
            this.isArchivioVisible = true;
            this.isWorkspaceVisible = true;
            this.isReportVisible = true;
            this.isSupportoVisible = true;
            this.router.navigate(['/home']); 
        }

        if (navlink === 'archvio') {
            this.isHomeVisible = true;
            this.isArchivioVisible = false;
            this.isWorkspaceVisible = true;
            this.isReportVisible = true;
            this.isSupportoVisible = true;
            this.router.navigate(['/archivio']); 
        }

        if (navlink === 'Workspace') {
            this.isHomeVisible = true;
            this.isArchivioVisible = true;
            this.isWorkspaceVisible = false;
            this.isReportVisible = true;
            this.isSupportoVisible = true;
        }

        if (navlink === 'Report') {
            this.isHomeVisible = true;
            this.isArchivioVisible = true;
            this.isWorkspaceVisible = true;
            this.isReportVisible = false;
            this.isSupportoVisible = true;
        }

        if (navlink === 'Supporto') {
            this.isHomeVisible = true;
            this.isArchivioVisible = true;
            this.isWorkspaceVisible = true;
            this.isReportVisible = true;
            this.isSupportoVisible = false;
        }
    }

    homeVisible() {
        this.isHomeVisible = true;
        this.isArchivioVisible = false;
        this.isWorkspaceVisible = true;
        this.isReportVisible = true;
        this.isSupportoVisible = true;
    }

    archivioVisible() {
        this.isHomeVisible = true;
        this.isArchivioVisible = true;
        this.isWorkspaceVisible = false;
        this.isReportVisible = true;
        this.isSupportoVisible = true;
    }

    workspaceVisible() {
        this.isHomeVisible = true;
        this.isArchivioVisible = true;
        this.isWorkspaceVisible = true;
        this.isReportVisible = false;
        this.isSupportoVisible = true;
    }

    reportVisible() {
        this.isHomeVisible = true;
        this.isArchivioVisible = true;
        this.isWorkspaceVisible = true;
        this.isReportVisible = true;
        this.isSupportoVisible = false;
    }

    supportoVisible() {
        this.isArchivioVisible = true;
        this.isWorkspaceVisible = true;
        this.isReportVisible = true;
        this.isSupportoVisible = true;
        this.isHomeVisible = false;
    }

    activeHome() {
        this.isHomeVisible = false;
        this.isArchivioVisible = true;
        this.isWorkspaceVisible = true;
        this.isReportVisible = true;
        this.isSupportoVisible = true;
    }

    activeArchivio() {
        this.isHomeVisible = true;
        this.isArchivioVisible = false;
        this.isWorkspaceVisible = true;
        this.isReportVisible = true;
        this.isSupportoVisible = true;
    }

    activeWorkspace() {
        this.isHomeVisible = true;
        this.isArchivioVisible = true;
        this.isWorkspaceVisible = false;
        this.isReportVisible = true;
        this.isSupportoVisible = true;
    }

    activeReport() {
        this.isHomeVisible = true;
        this.isArchivioVisible = true;
        this.isWorkspaceVisible = true;
        this.isReportVisible = false;
        this.isSupportoVisible = true;
    }

    activeSupporto() {
        this.isHomeVisible = true;
        this.isArchivioVisible = true;
        this.isWorkspaceVisible = true;
        this.isReportVisible = true;
        this.isSupportoVisible = false;
    }
}
