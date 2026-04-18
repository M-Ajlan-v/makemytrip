import { Component, HostListener } from '@angular/core';
import { HeadwidgetComponent } from "../headwidget/headwidget.component";

@Component({
  selector: 'app-header',
  imports: [HeadwidgetComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    isScrolled = false;
    activeIndex = 0;

  setActive(index: number) {
    this.activeIndex = index;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY > 100;
  }
}
