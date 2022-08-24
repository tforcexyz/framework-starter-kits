import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  {
    path: 'sample',
    loadChildren: () => import('./sample/sample.module')
      .then(x => x.SampleModule),
  },
  { path: '', component: IndexComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
