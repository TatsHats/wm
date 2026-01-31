import { Component } from '@angular/core';
import { InputUi } from '../../../shared/ui/input-ui/input-ui';
import { Button } from '../../../shared/ui/button/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [InputUi, Button, RouterModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {

}
