import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  hambugerStatus: boolean = false;
  themeStatus: boolean = false;

  constructor(private scroller: ViewportScroller) { }

  ngOnInit(): void {
    this.themeStatus = true;
  }

  navClick(val: string) {
    this.scroller.scrollToAnchor(val);
  }

  clickHamburger() {
    this.hambugerStatus = !this.hambugerStatus;
  }

  clickTheme() {
    this.themeStatus = !this.themeStatus;
    document.body.classList.toggle('dark');
    if (this.themeStatus) {
      //sun
    } else {
      //moon
    }
  }
}
