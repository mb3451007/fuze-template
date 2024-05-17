import { Component, ViewChild , AfterViewInit, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SpreadsheetAllModule, SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations'
import { SharedService } from 'app/services/shared.service';

@Component({
  selector: 'app-foglio',
  standalone: true,
  templateUrl: './foglio.component.html',
  styleUrl: './foglio.component.scss',
  imports        : [SpreadsheetAllModule, ToolbarModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class FoglioComponent implements AfterViewInit{
  constructor(private sharedService:SharedService,private elementRef:ElementRef,private renderer:Renderer2){}
  @ViewChild('spreadsheet', { static: false }) spreadsheet: SpreadsheetComponent;
  public toolbarItems: Object[] = [
    { text: 'Add', tooltipText: 'Add', prefixIcon: 'e-add', id: 'add' },
    { text: 'Save', tooltipText: 'Save', prefixIcon: 'e-save', id: 'save' },
    { type: 'Separator' },
    'Open', 'Undo', 'Redo'
  ];

  public sheets = [{
    rangeSettings: [{ dataSource: [[1, 2], [3, 4]] }]
  }];

  ngOnInit() {
    // Listen for fullscreen change event
    this.renderer.listen(document, 'fullscreenchange', (event) => {
      this.fullscreenChangeHandler();
    });
  }
ngAfterViewInit(): void {
  console.log('view has been initialize')
}
  addCustomToolbarItems(): void {
    const items: any[] = [
      { type: 'Separator' },
      {
        id: 'custombtn',
        tooltipText: 'Custom Button',
        prefixIcon: 'e-icons e-icons-save', // Use the save icon
        text: 'Custom'
      },
      {
        id: 'newItem',
        tooltipText: 'New Item',
        prefixIcon: 'e-icons e-icons-add', // Use the plus icon
        text: 'New Item'
      }
    ];
    this.spreadsheet.addToolbarItems('Home', items, 7);
  }


  onToolbarClick(args: ClickEventArgs): void {
    console.log ('hereeeee')
    switch (args.item.text) {
      case 'Save':
        this.saveSheet();
        break;
      case 'FullScreen':
        this.toggleFullScreen();
        break;
      case 'NewSheet':
        this.addSheet();
        break;
      case 'Custom':
        this.customButtonAction();
        break;
      case 'New Item':
        this.newItemAction();
        break;
      default:
        break;
    }
  }
  addSheet(): void {
    this.spreadsheet.insertSheet([{}]);
    this.spreadsheet.goTo(`${this.spreadsheet.sheets.length - 1}A1`); 
  }

  saveSheet(): void {
    // Implement save logic here
    console.log('Save logic goes here.');
  }

  toggleFullScreen(): void {
    const elem = document.documentElement;
    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }
customButtonAction(): void {
    // Implement custom button logic here
    alert('Custom button clicked');
  }
  newItemAction(): void {
    // Implement new item logic here
    alert('New item clicked');
  }
  onCreated(): void {
    this.spreadsheet.addToolbarItems('Home', [{ type: 'Button' }, { template: '<button id="add-new-btn" class="new-add-button"><img src="assets/images/plusicon.png"></button>'}], 0);
    this.spreadsheet.addToolbarItems('Home', [{ type: 'Button' }, { template: '<button id="save-without-icon" class="new-save-button" (click)="saveSheetsWithOutIcon()"><img src="assets/images/saveicon2.svg"></button>'}], 4);
    this.spreadsheet.addToolbarItems('Home', [{ type: 'Button' }, { template: '<div class="save-plus"><button id="save-btn" class="save-with-icon" (click)="saveSheet()"><img class="saveImage" src="assets/images/saveicons.svg"><img class="plusimage" src="assets/images/plusIcon.svg"></button></div>'}], 5);
    this.spreadsheet.addToolbarItems('Home', [{ type: 'Button' }, { template: '<button id="full-screen" class="full-screen-button" (click)="fullScreen()"><img src="assets/images/full-screen.svg"></button>'}], 8);
    document.getElementById('add-new-btn')?.addEventListener('click', this.addNewSheet.bind(this));
    document.getElementById('save-without-icon')?.addEventListener('click', this.onsave.bind(this));
    document.getElementById('save-btn')?.addEventListener('click',this.saveSheetsWithOutIcon.bind(this))
    document.getElementById('full-screen')?.addEventListener('click',this.fullScreen.bind(this))
}

  onSaveWithoutIcon(): void {
   
    
}
  onsave(): void {
  // this.spreadsheet.save() 
  this.spreadsheet.save({
    fileName: 'SpreadsheetData.xlsx'
  });   
}
  fullScreen(): void {
    const elem = document.documentElement;
    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen().then(() => this.sharedService.Fullscreen(true));
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => this.sharedService.Fullscreen(false));
      }
    }
  }
    

saveSheetsWithOutIcon(){
this.spreadsheet
}

addNewSheet(): void {
  this.spreadsheet.insertSheet(this.spreadsheet.sheets.length);
}


fullscreenChangeHandler() { 
  if (document.fullscreenElement) {
   this.sharedService.Fullscreen(true);
  } else {
    this.sharedService.Fullscreen(false);
  }
}

// Method to request fullscreen
requestFullscreen() {
  let element = this.elementRef.nativeElement;
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

// Method to exit fullscreen
exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if ((document as any).mozCancelFullScreen) {
    (document as any).mozCancelFullScreen();
  } else if ((document as any).webkitExitFullscreen) {
    (document as any).webkitExitFullscreen();
  } else if ((document as any).msExitFullscreen) {
    (document as any).msExitFullscreen();
  }
}
}                                                                                                                                          
