import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

// Page
import { OrderPage } from '../order/order';
import { Storage } from '@ionic/storage';

@Component({
	selector: 'page-thanks',
	templateUrl: 'thanks.html'
})
export class ThanksPage {
	OrderPage = OrderPage;
	params: Object;
	id:string; 
	isLogin:boolean;
	
	constructor(navParams: NavParams, storage: Storage) {
		this.params = navParams.get('params');
		console.log(this.params);
		// storage.get('login').then(val => {
		// 	if(val && val['token']) this.isLogin = true;
		// });
	}
}
