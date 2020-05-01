import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss'],
})
export class MoreComponent implements OnInit {
  open = false;
  getButtonName() {
    if (this.open) {
      return 'Read less';
    } else {
      return 'Read more';
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
