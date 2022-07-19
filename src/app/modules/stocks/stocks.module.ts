import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PurchaseComponent } from "./components/purchase/purchase.component";
import { SellComponent } from "./components/sell/sell.component";
import { StocksRoutingModule } from "./stocks.routes";

@NgModule({
    declarations: [
        PurchaseComponent,
        SellComponent
    ],
    imports: [
        CommonModule,
        StocksRoutingModule
    ],
    exports: []
})

export class StocksModule { }