import { Component } from '@angular/core';
import { FOOTER_DATA } from './data/foot.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  footerData = FOOTER_DATA;
}
