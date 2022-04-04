import { Component, OnInit } from '@angular/core';
import { DataInfo } from '../profile/dataInfo.model';
import { CommunicationService } from '../services/communication/communication.service';
import { Poke } from '../services/poke/Poke.model';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {

  user:String=""
  appState:String="profile"
  pasatiempo:String=""
  edad:String=""
  documento:String=""
  pokes: Poke[] = []

  constructor() { }

  ngOnInit(): void {
  }

  changeViewEvent(state:String) {
    this.appState = state
  }

  getDataEvent(data:DataInfo){
    this.user = data.infoForm.get('personName')?.value
    this.pasatiempo = data.hobbies.join(', ')
    this.edad = data.infoForm.get('birthday')?.value
    this.documento = data.infoForm.get('documentIdent')?.value

  }

  sendPokesEvent(pokes:Poke[]) {
    this.pokes = pokes    
  }

}
