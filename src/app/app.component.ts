import { Component, OnInit } from '@angular/core';
import { GlobalUser } from 'src/app/globaluser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'moody-foody';

  constructor(private user:GlobalUser) { }

  ngOnInit() {
    console.log("In app component : "+this.user.getUserLoggedIn());
  }
}
