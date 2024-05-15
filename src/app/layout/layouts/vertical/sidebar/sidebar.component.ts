import { Component } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  isHomeVisible: boolean = true;

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

    closeModal(): void {
        const overlay = document.querySelector('.overly');
        const modal = document.querySelector('.modal-qui');

        if (overlay && modal) {
            overlay.classList.add('hidden');
            modal.classList.add('hidden');
        }
    }
    openModal() {}
}
