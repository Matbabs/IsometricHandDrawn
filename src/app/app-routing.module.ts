import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/IsometricHandDrawn',
    pathMatch: 'full'
  },
  {path: 'IsometricHandDrawn', component: MapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
