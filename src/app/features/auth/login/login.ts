import { Component } from '@angular/core';
import { InputUi } from '../../../shared/ui/input-ui/input-ui';
import { Button } from '../../../shared/ui/button/button';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [InputUi, Button, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

}
