import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.css'
})
export class HeaderNavComponent implements OnInit {
  ngOnInit(): void {
    const hamburguer = document.querySelector(".hamburguer");

    const nav = document.querySelector(".nav");

    hamburguer?.addEventListener("click", () => nav?.classList.toggle("active"));
  }
}
