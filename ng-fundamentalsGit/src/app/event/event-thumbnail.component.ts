import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared/index'

@Component({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2> {{event?.name | uppercase}}</h2>
        <div>Date: {{event?.date| date:'shortDate'}} </div>
        <div [ngSwitch]="event?.time">
            <span *ngSwitchCase="'8:00 am'">Early Start</span>
            <span *ngSwitchCase="'10:00 am'">Late Start</span>
            <span *ngSwitchDefault>Normal Start</span>
        </div>
        <div>Price: {{event?.price | currency:'USD'}}</div>
        <div>
            <span>Location: {{event?.location?.address}}</span>
            <span>&nbsp;</span>
            <span>{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <button class="btn btn-primary" (click)="handleClickMe()">
            Click me!
        </button>
    </div>
    `,
    styles: [
        `
        .thumbnail { min-height:250px; }
        `
    ]
})

export class EventThumbnailComponent {
    @Input() event:IEvent;
    @Output() eventClick = new EventEmitter();
    someProperty:any = "some value";

    handleClickMe() {
        this.eventClick.emit(this.event.name);
    }

    logFoo() {
        console.log('foo');
    }
}