import { Component, Input, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication/communication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() user:String = ""

  constructor(private messageService:CommunicationService) { 
  }

  ngOnInit(): void {
    this.messageService.sendMessage(this.user)
  }

}
