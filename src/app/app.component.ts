import { Component } from '@angular/core';
import arr from '../utils/words';
import countriesarr from '../utils/countries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'word-generator';
  words = ' ';
  limit = 10;
  newlimit: any = 0;

  checkmodal :boolean = false;
  handle(eventlimit: Event) {
    this.newlimit = (eventlimit.target as HTMLInputElement).value;
    console.log(this.newlimit);
    this.limit = this.newlimit;
  }
  generate() {
    this.words = arr.slice(0, this.limit).join(' ');
    this.checkmodal = true;
  }

  generatecountries(){
    this.words = countriesarr.slice(Math.random() * 100,Math.random() * 100).join(" ")
    this.checkmodal = true;
  }
  closemodal(){
    this.checkmodal = false;
  }
}
