import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// MDB Modules
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { NgxChartsModule }from '@swimlane/ngx-charts';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegionComponent } from './region/region.component';
import { PerCapitaComponent } from './per-capita/per-capita.component';
import { ShareOfGovtSpendingComponent } from './share-of-govt-spending/share-of-govt-spending.component';
import { ReadmeComponent } from './readme/readme.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ConstantUsdComponent } from './constant-usd/constant-usd.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { DataSetComponent } from './data-set/data-set.component';
import { AllChartsComponent } from './all-charts/all-charts.component';

import { MessageModule } from 'primeng/message';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableauModule } from 'ngx-tableau';
import { OtherComponent } from './other/other.component';
import { TextReaderComponent } from './text-reader/text-reader.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegionComponent,
    PerCapitaComponent,
    ShareOfGovtSpendingComponent,
    ReadmeComponent,
    NotFoundComponent,
    ConstantUsdComponent,
    SidebarComponent,
    FooterComponent,
    MenuComponent,
    DataSetComponent,
    AllChartsComponent,
    OtherComponent,
    TextReaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    AppRoutingModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    MessageModule,
    TabMenuModule,
    TableauModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
