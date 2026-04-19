import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OFFERS_DATA } from './data/offers.data';
import { ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-offermain',
  imports: [CommonModule],
  templateUrl: './offermain.component.html',
  styleUrl: './offermain.component.css'
})
export class OffermainComponent implements OnInit {
  tabs: string[] = [
  'All Offers',
  'Flights',
  'Hotels',
  'Holidays',
  'Trains',
  'Visa',
  'Cabs',
  'Bank Offers'
];

@ViewChild('sliderTrack', { static: false })
sliderTrack!: ElementRef;

activeTab: string = 'All Offers';

offers = OFFERS_DATA;

groupedOffers: any[] = [];

setActive(tab: string) {
  this.activeTab = tab;
}

ngOnInit(): void {
    this.groupOffers();
}

groupOffers() {
    for (let i = 0; i < this.offers.length; i += 2) {
      this.groupedOffers.push(this.offers.slice(i, i + 2));
    }
  }

  scrollNext() {
  this.sliderTrack.nativeElement.scrollBy({
    left: 1000,
    behavior: 'smooth'
  });
}

scrollPrev() {
  this.sliderTrack.nativeElement.scrollBy({
    left: -1000,
    behavior: 'smooth'
  });
}
onDrag(e: MouseEvent) {
  if (e.buttons !== 1) return;

  this.sliderTrack.nativeElement.scrollLeft -= e.movementX *4;
}
}
