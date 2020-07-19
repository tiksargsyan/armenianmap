import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegionComponent} from './region/region.component';
import {GoogleMapsModule} from '@angular/google-maps';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { DialogComponent } from './dialog/dialog.component';
import { StreetDialogComponent } from './street-dialog/street-dialog.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    RegionComponent,
    DialogComponent,
    StreetDialogComponent
  ],
  entryComponents: [DialogComponent, StreetDialogComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        GoogleMapsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatGridListModule,
        MatCardModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatInputModule,
        MatIconModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
