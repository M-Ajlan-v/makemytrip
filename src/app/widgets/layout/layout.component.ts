import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { OffermainComponent } from "../offermain/offermain.component";
import { AdbannerComponent } from "../adbanner/adbanner.component";

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, OffermainComponent, AdbannerComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
