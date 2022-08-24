import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index.component';
import { SampleComponent } from './sample.component';

const routes: Routes = [{
  path: '',
  component: SampleComponent,
  children: [
    {
      path: '',
      component: IndexComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleRoutingModule {
}
