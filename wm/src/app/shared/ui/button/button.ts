import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() size: 'small' | 'big' = 'big';
  @Input() type: 'dark' | 'light' | 'text' = 'dark';
  @Input() disabled = false;
}