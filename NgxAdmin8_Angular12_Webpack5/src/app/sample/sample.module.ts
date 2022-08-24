import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule
} from '@nebular/theme';
import { ExtendModule } from '../@extend/extend.module';
import { IndexComponent } from './components/index.component';
import { SampleRoutingModule } from './sample-routing.module';
import { SampleComponent } from './sample.component';

@NgModule({
  declarations: [
    IndexComponent,
    SampleComponent,
  ],
  entryComponents: [
  ],
  imports: [
    CommonModule,
    ExtendModule,
    FormsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    ReactiveFormsModule,
    SampleRoutingModule,
  ],
})
export class SampleModule {
}
