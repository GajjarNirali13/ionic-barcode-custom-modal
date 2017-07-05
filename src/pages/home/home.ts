import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { CustomModalContext, CustomModal } from './custom-modal-sample';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Modal]
})
export class HomePage {
	options: BarcodeScannerOptions;

  	constructor(
  		public navCtrl: NavController,
  		private barcodeScanner: BarcodeScanner,
  		public modal: Modal
  	) {}

  	scanBarcode () {
  		this.barcodeScanner.scan().then((barcodeData) => {
  			alert('suceess');
  			alert(barcodeData);
  			console.log(barcodeData);
  		}, (err) => {
  			alert('error');
  			alert(err);
  		});	
  	}

  	openModal() {
  		return this.modal.open(CustomModal,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));	
  	}
}
