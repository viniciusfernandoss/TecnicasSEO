import { Component } from '@angular/core';
import { HeroBannerComponent } from "../../components/hero-banner/hero-banner.component";
import { HeaderNavComponent } from "../../components/header-nav/header-nav.component";
import { PriceComponent } from "../../components/price/price.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { AboutHimComponent } from "../../components/about-him/about-him.component";
import { AboutConteudoComponent } from "../../components/about-conteudo/about-conteudo.component";
import { OfertaComponent } from "../../components/oferta/oferta.component";


@Component({
  selector: 'app-header-page',
  standalone: true,
  imports: [HeroBannerComponent, HeaderNavComponent, PriceComponent, FooterComponent, AboutHimComponent, AboutConteudoComponent, OfertaComponent],
  templateUrl: './header-page.component.html',
  styleUrl: './header-page.component.css'
})
export class HeaderPageComponent {

}
