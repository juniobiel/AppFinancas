import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { SellComponent } from './components/sell/sell.component';

const routes: Routes = [
  { path: 'stocks/purchase', component: PurchaseComponent },
  { path: 'stocks/sell', component: SellComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class StocksRoutingModule { }
