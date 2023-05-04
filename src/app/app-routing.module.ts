import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { ProductsComponent } from './products/products.component';
import { ArticlesComponent } from './articles/articles.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes: Routes = [

  {path:'emploi', component: OffresEmploiComponentComponent },
  {path:'product', component: ProductsComponent },
  {path:'article', component: ArticlesComponent },
  { path: 'template', component: TemplateDrivenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
