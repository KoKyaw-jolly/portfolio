import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  hambugerStatus: boolean = false;
  themeStatus: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.themeStatus = true;
  }

  clickHamburger() {
    this.hambugerStatus = !this.hambugerStatus;
  }

  clickTheme() {
    this.themeStatus = !this.themeStatus;
    if (this.themeStatus) {
      //sun
    } else {
      //moon
    }
  }
}
