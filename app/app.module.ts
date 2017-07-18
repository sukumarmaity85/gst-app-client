import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {AppComponent} from "./app.component";
import {BlankComponent} from "./blank.component";
import {NguiDatetimePickerModule} from '@ngui/datetime-picker';
import {routing, appRoutingProviders} from './app.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        ReactiveFormsModule,
        NguiDatetimePickerModule
    ],
    declarations: [
        AppComponent,        
        BlankComponent,
       
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}