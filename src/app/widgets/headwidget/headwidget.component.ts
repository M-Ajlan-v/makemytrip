import { Component } from '@angular/core';

@Component({
  selector: 'app-headwidget',
  imports: [],
  templateUrl: './headwidget.component.html',
  styleUrl: './headwidget.component.css'
})
export class HeadwidgetComponent {
  selectedTab: string = 'oneway'; 
  selectedFare: string = 'regular';
  selectedFeature: string = '';

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
  selectFare(fare: string) {
    this.selectedFare = fare;
  }
  selectFeature(feature: string) {
    this.selectedFeature = feature;
  }
}
