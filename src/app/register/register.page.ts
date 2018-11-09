import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public router: Router,
              public loadingController: LoadingController) { }

  ngOnInit() {
  }
  async register() {
      const loading = await this.loadingController.create({
          message: '注册ing..',
          duration: 2000
      });
      return await loading.present();
  }
  pushLogin() {
    this.router.navigate(['login']);
  }
}
