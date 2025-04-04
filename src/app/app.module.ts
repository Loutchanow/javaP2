import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PieChartComponent } from './common/charts/pie-chart/pie-chart.component';
import { LineChartComponent } from './common/charts/line-chart/line-chart.component';
import { HeaderComponent } from './header/header.component';
import { LegendComponent } from './common/legend/legend.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserModule, FormsModule,NgxChartsModule,
    BrowserAnimationsModule,  PieChartComponent, LineChartComponent, HeaderComponent, LegendComponent  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
