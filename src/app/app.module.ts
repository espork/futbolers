import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { UpcomingComponent } from './games/upcoming/upcoming.component';
import { PlayedComponent } from './games/played/played.component'
import { GroupComponent } from './group/group.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    UpcomingComponent,
    PlayedComponent,
    GroupComponent,
    ProfileComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents: [GroupComponent, ProfileComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
