import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/Order';
import { OrderService } from '../../services/order.service';
import { faShoppingBasket} from '@fortawesome/free-solid-svg-icons';
import { Router} from '@angular/router';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css'],
})
export class AddOrderComponent implements OnInit {
  errorMessage: string;
  order: Order= new Order();
  router: any;
  constructor(private os: OrderService,router:Router) {}
  sb = faShoppingBasket;
  ngOnInit(): void {}

  addOrder(order: Order){
    this.os.addOrder(this.order).subscribe(data =>{
      console.log(data);
      Swal.fire({
        title:"Order Booked",
        icon:'success'
    })
    this.router.navigate(['/pay'])
    });
  }
}
