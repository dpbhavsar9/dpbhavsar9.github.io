import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTER_UTILS } from 'src/constants/router.utils';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegionComponent } from './region/region.component';
import { ConstantUsdComponent } from './constant-usd/constant-usd.component';
import { ShareOfGovtSpendingComponent } from './share-of-govt-spending/share-of-govt-spending.component';
import { ReadmeComponent } from './readme/readme.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PerCapitaComponent } from './per-capita/per-capita.component';
import { OtherComponent } from './other/other.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: ROUTER_UTILS.config.navigation.dashboard,
    pathMatch: 'full'
  },
  {
    path: ROUTER_UTILS.config.navigation.dashboard,
    component: DashboardComponent,
  },
  {
    path: ROUTER_UTILS.config.navigation.region,
    component: RegionComponent
  },
  {
    path: ROUTER_UTILS.config.navigation.constantUsd,
    component: ConstantUsdComponent
  },
  {
    path: ROUTER_UTILS.config.navigation.shareOfGdp,
    component: ShareOfGovtSpendingComponent
  },
  {
    path: ROUTER_UTILS.config.navigation.perCapita,
    component: PerCapitaComponent
  },
  {
    path: ROUTER_UTILS.config.navigation.govtSpending,
    component: ShareOfGovtSpendingComponent
  },
  {
    path: ROUTER_UTILS.config.navigation.other,
    component: OtherComponent
  },
  {
    path: ROUTER_UTILS.config.navigation.readme,
    component: ReadmeComponent
  },
  {
    path: '**',
    redirectTo: ROUTER_UTILS.config.navigation.notFound
  },
  {
    path: ROUTER_UTILS.config.navigation.notFound,
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
