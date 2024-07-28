import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Make sure this is imported
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]), // Add this if it's not present
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
