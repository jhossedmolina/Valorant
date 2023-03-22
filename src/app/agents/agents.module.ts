import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentsRoutingModule } from './agents-routing.module';
import { AgentsListComponent } from './pages/agents-list/agents-list.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [AgentsListComponent],
  imports: [CommonModule, AgentsRoutingModule, MaterialModule],
})
export class AgentsModule {}
