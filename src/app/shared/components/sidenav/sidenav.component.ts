import {Component} from '@angular/core';

/** @title Implicit main content with two sidenavs */
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
events: string[] = [];
  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
opened:boolean;
  toggleMenu(){

    this.opened = !this.opened;
  }
}
