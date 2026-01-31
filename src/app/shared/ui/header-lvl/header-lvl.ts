import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-lvl',
  imports: [],
  templateUrl: './header-lvl.html',
  styleUrl: './header-lvl.scss',
})
export class HeaderLvl {
  @Input() category: string = '';
  @Input() lvl: string = '';
}
