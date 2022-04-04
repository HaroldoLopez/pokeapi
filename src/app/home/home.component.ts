import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommunicationService } from '../services/communication/communication.service';
import { Poke } from '../services/poke/Poke.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() changeViewEvent = new EventEmitter<String>();

  @Input() user:String = ""
  @Input() pasatiempo:String = ""
  @Input() edad:String = ""
  @Input() documento:String = ""

  @Input() pokes:Poke[] = []
  
  constructor(private messageService:CommunicationService) {
    console.log("equipo pokes");
    console.log(this.pokes);
  }

  ngOnInit(): void {
    this.messageService.sendMessage(this.user)
  }

  edit(opc:string) {
    this.changeViewEvent.emit(opc);
  }

}
