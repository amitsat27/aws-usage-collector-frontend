import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // <-- This is essential

import { AppComponent } from './app.component';
import { AwsApiService } from './api/aws.service'; // Ensure your service is imported here
import { AwsResourcesComponent } from './components/aws/aws.component';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; 
// Import Angular Material Modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';  // For using mat-card
// Import the MatTabsModule here
import { MatTabsModule } from '@angular/material/tabs';

import { MatOptionModule } from '@angular/material/core'; // For mat-option
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AppComponent, AwsResourcesComponent],
  imports: [BrowserModule,
     HttpClientModule, 
     FormsModule,           // Add FormsModule
    AgGridModule,
    MatFormFieldModule,     // Import for mat-form-field
    MatSelectModule,        // Import for mat-select and mat-option
    MatCardModule,
    MatProgressSpinnerModule ,
    MatTabsModule,
    MatOptionModule,
    MatToolbarModule,
    MatIconModule
    ],        // Add AgGridModule], // <-- Import HttpClientModule here
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
