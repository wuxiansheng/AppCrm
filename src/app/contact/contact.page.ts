import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {
  constructor(public router: Router) {
  }
  addCustomer() {
    this.router.navigate(['coustomer']);
    }
    goTag() {
    this.router.navigate(['tag']);
    }
}
