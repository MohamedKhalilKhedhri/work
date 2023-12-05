import { Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { NotFoundComponent } from './not-found/not-found.component';


export const routes: Routes = [ 
  { path: '', component: Page1Component },
  { path: 'about', component: Page2Component },
  { path: 'contact', component: Page3Component },
  { path:'**',component:NotFoundComponent},
];
