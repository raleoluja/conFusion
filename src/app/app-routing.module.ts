import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {'path': 'home', component : HomeComponent},
  {'path': 'about', component: AboutComponent},
  {'path': 'menu' , component: MenuComponent},
  {'path': 'contact', component: ContactComponent},
  {'path': 'dishdetail', component: DishdetailComponent},
  {'path': '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
