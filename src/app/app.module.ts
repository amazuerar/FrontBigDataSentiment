import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackService } from './provider/back.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SentimentComponent } from './sentiment/sentiment.component';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AgmCoreModule } from '@agm/core';
import { HistoricoSeguidoresComponent } from './historico-seguidores/historico-seguidores.component';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';

const appRoutes: Routes = [
  { path: 'Sentiment', component: SentimentComponent },
  { path: 'Mapa', component: HistoricoSeguidoresComponent },
  { path: '**', component: SentimentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SentimentComponent,
    HistoricoSeguidoresComponent
  ],
  imports: [
    AgmJsMarkerClustererModule,
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBsJOWygW3OFgqXe5O7q8yWuuDltI_bsLk',
      libraries: ['places']
    }),
    HttpModule,
    NgxChartsModule,
    ReactiveFormsModule,

  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, BackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
