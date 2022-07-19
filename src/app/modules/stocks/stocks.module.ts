import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PurchaseComponent } from "./components/purchase/purchase.component";
import { SellComponent } from "./components/sell/sell.component";
import { RouterModule } from "@angular/router";
import { StocksRoutingModule } from "./stocks-routing.module";

@NgModule({
    declarations: [
        PurchaseComponent,
        SellComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        StocksRoutingModule,
    ],
    exports: [
        PurchaseComponent,
        SellComponent,
        StocksRoutingModule
    ]
})

export class StocksModule { }