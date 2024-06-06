import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from 'app/app.component';
import { appConfig } from 'app/app.config';
import { registerLicense } from '@syncfusion/ej2-base';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

registerLicense('ORg4AjUWIQA/Gnt2UFhhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTX5Wd0BjW3xecHxTQmdY');

bootstrapApplication(AppComponent, appConfig)
    .catch(err => console.error(err));
