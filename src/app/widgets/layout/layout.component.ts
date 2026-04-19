import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { OffermainComponent } from "../offermain/offermain.component";
import { AdbannerComponent } from "../adbanner/adbanner.component";
import { PlaneComponent } from "../plane/plane.component";
import { DownloadComponent } from "../download/download.component";
import { FlightsComponent } from "../flights/flights.component";
import { FooterComponent } from "../footer/footer.component";
import { AppendqComponent } from "../appendq/appendq.component";
import { BottomComponent } from "../bottom/bottom.component";

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, OffermainComponent, AdbannerComponent, PlaneComponent, DownloadComponent, FlightsComponent, FooterComponent, AppendqComponent, BottomComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
