import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { AddComponent } from './add/add.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ConventionTemplateComponent } from './convention-template/convention-template.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
@NgModule({
  declarations: [AddComponent, ConventionTemplateComponent, SearchComponent],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    DragDropModule, FormsModule,
    Ng2Charts
  ]
})
export class TemplateModule { }

