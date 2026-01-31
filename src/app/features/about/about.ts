import { Component } from '@angular/core';
import { Button } from '../../shared/ui/button/button';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [Button, RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
