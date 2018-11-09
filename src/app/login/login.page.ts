import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  mobile: any;
  password: any;
  errorMessage: any;
  constructor(public  router: Router,
              public loadingController: LoadingController) { }

  ngOnInit() {
  }
  async login() {
      const loading = await this.loadingController.create({
          message: '登录中...',
          duration: 1000
      });
      return await loading.present();
  }
  pushRegister() {
    this.router.navigate(['register']);
  }
}
