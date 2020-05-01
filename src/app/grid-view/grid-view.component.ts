import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss'],
})
export class GridViewComponent implements OnInit {
  activeLayout = 'list';
  changeLayout(name: string) {
    this.activeLayout = name;
  }
  getWidth() {
    return this.activeLayout === 'list' ? 'w-100' : 'w-50';
  }

  constructor() {}

  ngOnInit(): void {}
}
