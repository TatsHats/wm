import { Component } from '@angular/core';
import { InputUi } from '../../../shared/ui/input-ui/input-ui';
import { Button } from '../../../shared/ui/button/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  imports: [InputUi, Button, RouterModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss',
})
export class ForgotPassword {

}
