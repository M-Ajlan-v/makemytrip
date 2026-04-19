import { Component } from '@angular/core';
import { FLIGHT_DATA } from './data/flightdata';  
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-flights',
  imports: [CommonModule],
  templateUrl: './flights.component.html',
  styleUrl: './flights.component.css'
})
export class FlightsComponent {
    flightList = FLIGHT_DATA;

    
}
