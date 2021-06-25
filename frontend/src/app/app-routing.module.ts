import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {LinearAlgComponent} from "./linear-alg/linear-alg.component";
import {CompMethodsComponent} from "./comp-methods/comp-methods.component";

const routes: Routes = [
  {
    path: 'main', component: MainComponent,
  },
  {
    path: 'linearAlg', component: LinearAlgComponent
  },
  {
    path: 'compMethods', component: CompMethodsComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
