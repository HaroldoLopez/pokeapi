import { Component, Input, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication/communication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: String = "";
  userAvailable:Boolean = true

  userAvaible:Boolean=false

  constructor(private messageService:CommunicationService) {
    
  }

  ngOnInit(): void { 
    const context = this
    this.messageService.getMessage().subscribe(data => {
      context.user = data
      context.userAvaible = true
      console.log("usuario message");
      console.log(context.user);
    })
  }


}
