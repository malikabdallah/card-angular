import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokerComponent } from './components/poker/poker.component';

const routes: Routes = [
  { path: '', component: PokerComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
