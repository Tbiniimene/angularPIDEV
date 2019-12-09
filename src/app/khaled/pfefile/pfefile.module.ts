import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagInputModule } from 'ngx-chips';
import { FormsModule } from '@angular/forms';

import { PfefileRoutingModule } from './pfefile-routing.module';
import { AllComponent } from './all/all.component';
import { SingleComponent } from './single/single.component';

@NgModule({
  declarations: [AllComponent, SingleComponent],
  imports: [
    CommonModule,
    PfefileRoutingModule,
    TagInputModule,
    FormsModule
  ]
})
export class PfefileModule { }