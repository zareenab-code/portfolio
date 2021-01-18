import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  isButtonClicked = false;

  constructor() {}

  get buttonClicked() {
    return this.isButtonClicked;
  }

  onButtonClicked() {
    this.isButtonClicked = true;
  }
}
