export type Scheme = 'auto' | 'dark' | 'light';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config/config.service';
import { DarkModeService } from 'app/dark-mode.service';
import { FuseConfig, Theme, Themes } from '@fuse/services/config';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatIconModule,MatTooltipModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  implements OnInit{
  isDarkModeOn:boolean=false;
  config: FuseConfig;
  scheme: 'dark' | 'light';
  ngOnInit(): void {
    this.darkModeService.darkMode$.subscribe((darkMode:any)=>{
      this.isDarkModeOn=darkMode;
      console.log ('inside inittttt', this.isDarkModeOn)
      if(this.isDarkModeOn){
        document.body.classList.add('dark');
      }
      else{
        document.body.classList.add('light');
      }
    }
  )
  }
  constructor(private darkModeService:DarkModeService, private _fuseConfigService:FuseConfigService){
  }
  toggleDropdown(id: string): void {
    const dropdown = document.getElementById(id);
    if (dropdown) {
        dropdown.classList.toggle('hidden');
    }
}

toggleDarkMode(event: Event): void {
  this.isDarkModeOn = (event.target as HTMLInputElement).checked;
  const scheme = this.isDarkModeOn ? 'dark' : 'light';
  this.setScheme(scheme);
}
checkDarkModOn():boolean{
 return this.isDarkModeOn;
}

setScheme(scheme: string): void {
  console.log(`Scheme set to: ${scheme}`);
  this._fuseConfigService.config = { scheme };
}
}
