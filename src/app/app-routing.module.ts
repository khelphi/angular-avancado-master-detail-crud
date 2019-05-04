import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  /*Defnindo a rota para categories e qual module vai usar*/
  {path: 'categories',loadChildren:'./pages/categories/categories.module#CategoriesModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
