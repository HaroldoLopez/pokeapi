import { Component, Input, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication/communication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: String = "";
  userAvailable:Boolean = false

  constructor(private messageService:CommunicationService) {
    
  }

  ngOnInit(): void { 
    this.messageService.getMessage().subscribe(data => {
      this.user = data
      this.userAvailable = true
      console.log("usuario message");
      console.log(this.user);
    })
  }


}
