import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from './shared/ui/button/button';
import { Card } from './shared/ui/card/card';
import { InputUi } from './shared/ui/input-ui/input-ui';
import { HeaderLvl } from './shared/ui/header-lvl/header-lvl';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, Card, InputUi, HeaderLvl],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('wm');
}
