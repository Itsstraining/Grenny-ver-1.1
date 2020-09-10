import { Component, OnInit } from '@angular/core';
import { NbThemeService,NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService) { }
  toggle() {
    this.sidebarService.toggle(false, 'left');
  }
  ngOnInit() {
  }
}
