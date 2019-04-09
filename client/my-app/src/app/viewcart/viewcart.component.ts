import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {
  @ViewChild('form') form: ElementRef;
  accessCode: any;
  encRequestRes : any;
  order_no : any = 'qaz234567';
  testAmount : any = '10';
  selectedAddress : any = {
    name : 'testing',
    address : 'test address',
    city : 'test city',
    pincode : '23456',
    state : 'state test',
    phone : '1234567890'
  }
  constructor(public userService:UserserviceService) { }

  ngOnInit() {
    this.accessCode = 'AVBS02GD63AJ23SBJA';

  }

  checkout(){
    let redirect_url = 'http%3A%2F%2Flocalhost%3A3008%2Fhandleresponse';
    let useremail = 'testemail@gmail.com';
    let request = `merchant_id=213313&order_id=${this.order_no}&currency=INR&amount=${this.testAmount}&redirect_url=${redirect_url}&cancel_url=${redirect_url}&language=EN&billing_name=${this.selectedAddress.name}&billing_address=${this.selectedAddress.address}&billing_city=${this.selectedAddress.city}&billing_state=MH&billing_zip=${this.selectedAddress.pincode}&billing_country=India&billing_tel=${this.selectedAddress.phone}&delivery_name=${this.selectedAddress.name}&delivery_address=${this.selectedAddress.address}&delivery_city=${this.selectedAddress.city}&delivery_state=${this.selectedAddress.state}&delivery_zip=${this.selectedAddress.pincode}&delivery_country=India&delivery_tel=${this.selectedAddress.phone}&billing_email=${useremail}`
    this.userService.encryptdata(request).subscribe(
      data => {
      console.log('---------------------', data['response'])
      this.encRequestRes = data['response']; 
          setTimeout(()=>{
              this.form.nativeElement.submit();
          },1000)
      }, error => {
      console.log(error)
      }
      );
  }

}
