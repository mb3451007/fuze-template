import { Component } from '@angular/core';
import { DarkModeService } from 'app/dark-mode.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private darkModeService:DarkModeService){}
  toggleDropdown(id: string): void {
    const dropdown = document.getElementById(id);
    if (dropdown) {
        dropdown.classList.toggle('hidden');
    }
}
toggleDarkMode(event:Event):void{
  console.log('this is dark mood trigger method in toggel method');
 const isChecked=(event.target as HTMLInputElement).checked;
  this.darkModeService.toggleDarkMode(isChecked)
  console.log(isChecked, 'is chechked')
}
}
