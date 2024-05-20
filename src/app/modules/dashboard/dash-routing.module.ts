import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ArchivioComponent } from './archivio/archivio.component';
import { SupportoComponent } from 'app/supporto/supporto.component';
import { ReportComponent } from 'app/report/report.component';
import { WorkspaceComponent } from 'app/workspace/workspace.component';

const routes: Routes = [

  {path:'' , redirectTo:'dashboard', pathMatch:'full'},
  {path:'dashboard' , component:DashboardComponent,children:[
    {path:'' , redirectTo:'archivio' , pathMatch:'full'},
    {path:'home' , component:HomeComponent },
    {path:'archivio' , component:ArchivioComponent},
    {path:'workspace' , component:WorkspaceComponent},
    {path:'report' , component:ReportComponent },
    {path:'support' , component:SupportoComponent },

  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashRoutingModule { }
