import { Component,AfterViewInit  } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';



declare var bootstrap: any;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nellai-fresh-milk';
  ngAfterViewInit() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const menuToggle = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

    navLinks.forEach((l: any) => {
      l.addEventListener('click', () => {
        if (menuToggle?.classList.contains('show')) {
          bsCollapse.hide();
        }
      });
    });
  }
}
