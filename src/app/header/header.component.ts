import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'app/dark-mode.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  implements OnInit{
  isDarkModeOn:boolean=false;
  ngOnInit(): void {
    this.darkModeService.darkMode$.subscribe((darkMode:any)=>{
      this.isDarkModeOn=darkMode;
      console.log ('inside inittttt', this.isDarkModeOn)
      if(this.isDarkModeOn){
        document.body.classList.add('dark-mode');
      }
      else{
        document.body.classList.add('light-mode');
      }
    }
  )
  }
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
checkDarkModOn():boolean{
 return this.isDarkModeOn;
}

}
