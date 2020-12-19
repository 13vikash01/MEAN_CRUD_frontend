import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUpdateComponent } from './components/create-update/create-update.component';
import { ListComponent } from './components/list/list.component';
import { SingleComponent } from './components/single/single.component';

const routes: Routes = [
    {path:'',component:ListComponent},
    {path:'createUpdate',component:CreateUpdateComponent},
    {path:'show',component:SingleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
