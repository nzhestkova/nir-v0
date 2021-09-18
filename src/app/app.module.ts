import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MockServerApiService} from './services/mock-server-api.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MainPageComponent} from './components/main-page/main-page.component';
import {MatCardModule} from '@angular/material/card';
import { ListViewComponent } from './components/list-view/list-view.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [
        AppComponent,
        MainPageComponent,
        ListViewComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule
    ],
    providers: [
        MockServerApiService,
        HttpClient
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
