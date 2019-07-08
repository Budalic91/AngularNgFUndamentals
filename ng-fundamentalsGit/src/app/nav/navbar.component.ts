import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../event';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styles:[`
    li > a.active { color: red; }
  `]
})
export class NavBarComponent {
  searchTerm: string = "";
  foundSessions: ISession[];
  title = 'ng-fundamentals';

  constructor(private auth:AuthService, private eventService: EventService) { 
  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    })
  }
}
