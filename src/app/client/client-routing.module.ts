import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { AboutComponent } from './about/about.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [{path:'client' , component: ClientComponent ,
 children:[{path:'home' , component:HomeComponent} ,
{path :'about' ,component : AboutComponent}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
