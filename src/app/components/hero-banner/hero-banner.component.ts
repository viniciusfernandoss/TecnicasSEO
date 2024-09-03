import { Component } from '@angular/core';
import { HeaderNavComponent } from '../header-nav/header-nav.component';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [HeaderNavComponent],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.css'
})
export class HeroBannerComponent {

}
