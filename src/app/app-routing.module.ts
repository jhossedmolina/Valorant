import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'agents',
    loadChildren: () =>
      import('./agents/agents.module').then((m) => m.AgentsModule),
  },
  {
    path: '',
    redirectTo: 'agents',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
