import { Component, OnInit } from '@angular/core';
import { Ratings } from 'src/app/models/Ratings';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {
  ratings: any[];

  constructor() { }

  ngOnInit(): void {
    this.ratings = [
      new Ratings(1, 'Khan', 'Very good service ', 9),
      new Ratings(2, 'Khan', 'Excellent service', 10),
      // Add more ratings as needed
    ];
  }
}
