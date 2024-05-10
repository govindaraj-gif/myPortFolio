import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortFolioComponent } from './portFolio/portFolio.component';

const routes: Routes = [
  {path:'' , component:PortFolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
