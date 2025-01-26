import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FancyTitleComponent } from './fancy-title/fancy-title.component';
import { AmostraReviewComponent } from './feed-reviews/amostra-review/amostra-review.component';
import { FancyScoreComponent } from './fancy-score/fancy-score.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AmostraReviewComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
