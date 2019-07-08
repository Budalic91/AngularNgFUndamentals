import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.comonent';


import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  UpvoteComponent,
  VoterService,
  LocationValidator,
  DurationPipe,
  EventResolver
} from './event/index';

import { 
  JQ_TOKEN, 
  TOASTR_TOKEN, 
  Toastr, 
  CollapsibleWellComponent, 
  SimpleModalComponent,
  ModalTriggerDirective
} from './common/index';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

let toastr:Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    UpvoteComponent,
    ModalTriggerDirective,
    DurationPipe,
    SimpleModalComponent,
    LocationValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue:toastr },
    { provide: JQ_TOKEN, useValue: jQuery  },
    EventResolver,
    EventListResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    VoterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You hane not saved this event, do you really want to cancel?')
  }
  else {
    return true;
  }
}
