import { Component, HostListener, OnInit } from '@angular/core';
import { UserService } from 'src/app/entityServices/user-service/user.service';
import { Order } from 'src/app/models/Order';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
declare var Razorpay:any;

@Component({
  selector: 'app-add-user-order',
  templateUrl: './add-user-order.component.html',
  styleUrls: ['./add-user-order.component.css'],
})
export class AddUserOrderComponent implements OnInit {
  errorMessage: string;
  order: any = new Order();
  washPackOptions: string[] = ['Standard Wash', 'Car Service', 'Water Wash']; // Define your dropdown options here

  constructor(private us: UserService) {}

  sb = faShoppingBasket;
  message: any = "Not yet started";
  paymentId = "";
  error = "";

  options = {                                          
    "key": "rzp_test_CChQfSDHtCm3E3",
    "amount": "200",
    "name": "Ramya",
    "description": "pay safe with razorpay to car wash system",
    "order_id": "",
    "handler": (response: any) => {
      var event = new CustomEvent("payment.success", {
        detail: response,
        bubbles: true,
        cancelable: true
      });
      window.dispatchEvent(event);
    },
    "prefill": {    
      "name": "Ramya",
      "email": "ramya@gmail.com",
      "contact": "9988776655"
    },
    "notes": {
      "address": ""
    },
    "theme": {                        
      "color": "#3399cc"
    }
  };

  ngOnInit(): void {}

  paynow() {
    this.paymentId = '';
    this.error = '';
    this.options.amount = "200000";
    this.options.prefill.name = "Ramya";
    this.options.prefill.email = "";
    this.options.prefill.contact = "";
    var rzp1 = new Razorpay(this.options);
    rzp1.open();
    rzp1.on('payment.failed', (response: any) => {
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
    });
  }

  @HostListener('window:payment.success', ['$event'])
  onPaymentSuccess(event: any): void {
    this.message = "Success Payment";
    // Call the addOrder function after successful payment
    this.addOrder(this.order);
  }

  addOrder(order: Order) {
    this.us.addOrder(this.order).subscribe((data) => {
      console.log(data);
      Swal.fire({
        title: 'Order Booked',
        text: 'Payment Successful!',
        icon: 'success',
      });
    });
  }
}
