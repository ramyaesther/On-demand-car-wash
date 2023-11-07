import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // cost = sessionStorage.getItem('totalCost');
  // username=sessionStorage.getItem('username');
  // email=sessionStorage.getItem('email');

  // constructor(private router: Router) { }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  // payNow() {
 
  //   const RozarpayOptions = {
   
  //     description: 'Sample Razorpay demo',
   
  //     currency: 'INR',
   
  //     amount: (Number(this.cost) || 0) * 100,
   
  //     name: this.username,
   
  //     key: 'rzp_test_R0E6vRKVd3hRDQ',
   
  //     image: 'https://i.imgur.com/FApqk3D.jpeg',
   
  //     prefill: {
   
  //       name: this.username,
  //       email:this.email,
       
       
  //     },
   
  //     theme: {
   
  //       color: '#6466e3'
   
  //     },
   
  //     modal: {
   
  //       ondismiss:  () => {
   
  //         console.log('dismissed')
   
  //       }
   
  //     }
   
  //   }
  //   const successCallback = (paymentid: any) => {
 
  //     console.log(paymentid);
  //     //this.router.navigate(['/bookingList']);
  //     //window.location.href = '/bookinglist';
  //   }
  //   const failureCallback = (e: any) => {
 
  //     console.log(e);
   
  //   }
   
   
   
  //   Razorpay.open(RozarpayOptions,successCallback, failureCallback)
   
  // }
   
  }
  
 