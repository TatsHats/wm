import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-ui',
  imports: [],
  standalone: true,
  templateUrl: './input-ui.html',
  styleUrl: './input-ui.scss',
})
export class InputUi {
  @Input() placeholder = '';
  @Input() type: 'text' | 'email' | 'password' | 'number' = 'text';
  @Input() disabled = false;
  @Input() icon: string | null = null;

  @Input() error: string | null = null;
  
  visiblePassword = false;

  togglePassword() {
    this.visiblePassword = !this.visiblePassword;
  }
}
