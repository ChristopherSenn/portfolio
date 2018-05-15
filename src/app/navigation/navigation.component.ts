import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  enabled: boolean;

  constructor() { }

  ngOnInit() {
    this.enabled = true;
  }

  disableScroll() {
    if (this.enabled === true) {
      this.enabled = false;
      document.getElementsByTagName('body')[0].setAttribute('style', 'overflow: hidden;');
    } else {
      this.enabled = true;
      document.getElementsByTagName('body')[0].setAttribute('style', 'overflow: auto;');
    }
  }

  enableScroll() {
    document.getElementsByTagName('body')[0].setAttribute('style', 'overflow: auto;');
    this.enabled = true;
  }
}
